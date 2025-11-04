import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Polyline, Polygon, GeoJSON } from 'react-leaflet'
import './App.css'
import Menu from './Menu.jsx'
import TimeSlider from './TimeSlider.jsx'
import HelpModal from './HelpModal.jsx'
import '../public/geoJSONstates.json'
import fs from 'fs';

function App() {
  const center = [30, 40]

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ]

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ]

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ]

  const limeOptions = { color: 'lime' }
  const purpleOptions = { color: 'purple' }

  return (
    <>
      <MapContainer className="mapContainer" center={center} zoom={5} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      
        <Polyline pathOptions={limeOptions} positions={polyline} />
        <Polyline pathOptions={limeOptions} positions={multiPolyline} />
        <Polygon pathOptions={purpleOptions} positions={polygon} />
        <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
      </MapContainer>
      <Menu />
      <TimeSlider />
      <HelpModal />
    </>
  )
}

export default App
