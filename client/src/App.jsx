import { useState } from 'react'
import { MapContainer, TileLayer, useMap, Polyline, Polygon, GeoJSON } from 'react-leaflet'
import './App.css'
import Menu from './Menu.jsx'
import TimeSlider from './TimeSlider.jsx'
// import HelpModal from './HelpModal.jsx'
import geoJSONstates from './assets/geoJSONstates.json'
import geoJSONcountries from './assets/custom.geo.json'
import { useNavigate } from 'react-router'
import fs from 'fs';

function App() {
  const center = [30, 40]
  const navigate = useNavigate();
  // geoJSONcountries.GeoJSON
  
  return (
    <>
      <MapContainer className="mapContainer" center={center} zoom={5} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={geoJSONcountries} />
        <GeoJSON data={geoJSONstates} />

      </MapContainer>
      <Menu />
      <TimeSlider />
      <button className='home-button' onClick={() => navigate("/")}>Home</button>
      {/* <HelpModal /> */}
    </>
  )
}

export default App
