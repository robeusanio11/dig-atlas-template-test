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

  return (
    <>
      <MapContainer className="mapContainer" center={center} zoom={5} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
      <Menu />
      <TimeSlider />
      <HelpModal />
    </>
  )
}

export default App
