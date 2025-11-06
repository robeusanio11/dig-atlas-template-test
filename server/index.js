import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs'
import { geoJSON } from 'leaflet'
const app = express()
const PORT = 1111

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.use(cors())
app.use(express.json())

app.get('/states', (req, res) => {
    geojson = JSON.parse(fs.readFileSync('server/geoJSONstates.json', 'utf8'))
    const states = geojson.features.map(feature => ({
    name: feature.properties.NAME,
    type: feature.geometry.type,
    border: feature.geometry.coordinates
    }))
    res.send(states)
})
