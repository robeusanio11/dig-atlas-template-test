const fs = require('fs')

const inputFile = './statesedit.json';
const outputFile = './statesWithDates.json';

const yearStarts = [1600, 1700, 1800, 1900, 2000];
const yearEnds = [ 1700, 1800, 1900, 2000, 2025];

try {
    const rawData = fs.readFileSync(inputFile, 'utf8');
    const geojson = JSON.parse(rawData);

    if (!geojson.features || !Array.isArray(geojson.features)) {
        throw new Error("invalid GeoJSON: 'features' is missing or not an array");
    }

    geojson.features = geojson.features.map(feature => {
        const randomIndex = Math.floor(Math.random() * yearStart.length);
        return {
            ...feature,
            properties: {
                ...feature.properties,
                year_start: yearStarts[randomIndex],
                year_end: yearEnds[randomIndex]
            }
        }
    })

    fs.writeFileSync(outputFile, JSON.stringify(geojson, null, 2), 'utf8');
    
} catch (error) {
    console.error('Error processing file:', error.message);
}