import { useState, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { MapContainer, TileLayer, useMap, Polyline, Polygon, GeoJSON, LayersControl } from 'react-leaflet'
import './App.css'
import Menu from './Menu.jsx'
import TimeSlider from './TimeSlider.jsx'
import EventSidebar from './EventSidebar.jsx'
// import geoJSONstates from './assets/geoJSONstates.json'
// import geoJSONstates from './assets/bostockStates.json'
import geoJSONstates from './assets/statesWithYears.json'
import events from './assets/events.json'
import geoJSONcountries from './assets/custom.geo.json'
import BorderLayer from './BorderLayer.jsx'

function App() {
  const center = [41,-100]
  const [selectedState, setSelectedState] = useState(null);
  const [year, setYear] = useState(null);

  const navigate = useNavigate();

  const getColor = (density) => {
    return  density > 1000 ? '#edf8fb' :
            density > 500  ? '#ccece6' :
            density > 200  ? '#99d8c9' :
            density > 100  ? '#66c2a4' :
            density > 50   ? '#2ca25f' :
                             '#006d2c';
  };

  const style = (feature) => {
    return {
      fillColor: getColor(feature.properties.density),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.7
    };
  };

  const filteredGeoJSON = useMemo(() => {
    return {
      ...geoJSONstates,
      features: geoJSONstates.features.filter(f => {
        const { year_start, year_end } = f.properties;
        return year_start <= year && year <= year_end;
      })
    };
  }, [year]);

  return (
    <>
      <MapContainer className="mapContainer" center={center} zoom={4} scrollWheelZoom={false}>
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <GeoJSON data={geoJSONcountries}  />
        <GeoJSON data={geoJSONstates} style={style} onEachFeature={onEachFeature}/> */}
        
        {/* CHANGE MENU ON CLICK */}
        {/* <BorderLayer 
          key={year}
          geoJSONstates={filteredGeoJSON} 
          style={style}
          onFeatureClick={(feature) => setSelectedState(feature.properties)} /> */}
        <BorderLayer 
          key={year}
          geoJSONstates={filteredGeoJSON} 
          style={style}
          onFeatureHover={(feature) => setSelectedState(feature.properties)} />
      </MapContainer>
      <Menu selectedState={selectedState} />
      <TimeSlider year={year} onChangeYear={setYear}/>
      <EventSidebar events={events} onSelectEvent={(year) => setYear(year)} />
      <button className='home-button' onClick={() => navigate("/")}>Home</button>
    </>
  )
}

export default App
