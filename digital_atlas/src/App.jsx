import { useState } from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div class="mapContainer"> */}
        <MapContainer className="mapContainer" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        <div id="map"></div>
      {/* </div> */}
    </>
  )
}

export default App
