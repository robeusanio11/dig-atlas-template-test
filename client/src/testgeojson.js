import fs from 'fs'

const geojson = JSON.parse(fs.readFileSync('digital_atlas/public/geoJSONstates.json', 'utf8'))
const states = geojson.features.map(feature => ({
name: feature.properties.NAME,
type: feature.geometry.type,
border: feature.geometry.coordinates
}))
console.log(states)