import { useState, useRef} from 'react'
import { useMap, GeoJSON } from 'react-leaflet'

function BorderLayer({ geoJSONstates, style, onFeatureHover }) {
  const geoJsonRef = useRef(null);
  const map = useMap(); // safe here

  const highlightFeature = (e) => {
    e.target.setStyle({
      weight: 5,
      color: '#005824',
      dashArray: '',
      fillOpacity: 1
    });
  };

  const resetHighlight = (e) => {
    if (geoJsonRef.current) {
      geoJsonRef.current.resetStyle(e.target);
    }
  };

  const zoomToFeature = (e) => {
    map.fitBounds(e.target.getBounds());
  };

  // CHANGE MENU ON CLICK
//   const onEachFeature = (feature, layer) => {
//     layer.on({
//       mouseover: highlightFeature,
//       mouseout: resetHighlight,
//       click: (e) => {
//         if (onFeatureClick) { 
//             onFeatureClick(feature); 
//         }
//         zoomToFeature(e);
//         }
//     });
//   };

    //CHANGE MENU ON HOVER
    const onEachFeature = (feature, layer) => {
        layer.on({
            mouseover: (e) => {
                onFeatureHover(feature);
                highlightFeature(e);
            },
            mouseout: resetHighlight,
            click: zoomToFeature
        });
    };

  return (
    <>
      <GeoJSON
        data={geoJSONstates}
        style={style}
        onEachFeature={onEachFeature}
        ref={geoJsonRef}
      />
    </>
  );
}

export default BorderLayer