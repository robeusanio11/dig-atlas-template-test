# Digital Atlas

An interactive React-based web application that visualizes historical US state boundaries from 1500 to 2025 using Leaflet maps.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Navigate to http://localhost:5173
```

## Project Structure

```
digital-atlas/
├── client/                  # Frontend React application
│   ├── src/
│   │   ├── App.jsx         # Main map view component
│   │   ├── Home.jsx        # Landing page
│   │   ├── Menu.jsx        # Info sidebar for state details
│   │   ├── BorderLayer.jsx # Interactive map layer handler
│   │   ├── TimeSlider.jsx  # Year selection slider (1500-2025)
│   │   ├── main.jsx        # App entry point with routing
│   │   └── assets/         # GeoJSON data files
│   ├── vite.config.js      # Vite configuration
│   └── package.json        # Frontend dependencies
├── server/
│   ├── index.js            # Express server (WIP)
│   └── geoJSONstates.json  # State boundary data
└── package.json            # Root dependencies
```

## Key Components

### **App.jsx** - Main Map View
- Orchestrates the entire map interface
- Manages state for selected state and current year
- Filters GeoJSON features based on year range (`year_start`, `year_end`)
- Applies color-coding to states based on density property
- Integrates MapContainer, BorderLayer, Menu, and TimeSlider

### **BorderLayer.jsx** - Interactive Map Layer
- Renders GeoJSON polygons with hover/click interactivity
- Highlights states on hover (changes border color and weight)
- Zooms to state bounds on click
- Triggers callbacks to update the Menu component with state data

### **TimeSlider.jsx** - Year Selection Control
- Provides a range slider for years 1500-2025
- Updates parent component via `onChangeYear` callback
- Triggers map re-render to display historical boundaries

### **Menu.jsx** - Information Sidebar
- Toggleable sidebar (☰ button to open/close)
- Displays default content when no state is selected
- Shows state name and density when hovering over states
- Controlled by `selectedState` prop from App.jsx

### **Home.jsx** - Landing Page
- Welcome screen with basic navigation
- Links to main map view at `/atlas` route

### **main.jsx** - Application Entry Point
- Sets up React Router with two routes: `/` (Home) and `/atlas` (Map)
- Renders root React application

## Technology Stack

### Frontend
- **React 19** - UI framework
- **React Router v7** - Client-side routing
- **Vite** - Build tool and dev server
- **Leaflet.js** - Interactive mapping library
- **React Leaflet** - React bindings for Leaflet

### Backend
- **Express.js** - Server framework (currently incomplete)
- **GeoJSON** - Geographic data format

## Data Structure

The application uses GeoJSON files with the following structure:

```json
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name": "State Name",
        "density": 123,
        "year_start": 1776,
        "year_end": 2025
      },
      "geometry": {
        "type": "Polygon",
        "coordinates": [...]
      }
    }
  ]
}
```

## How It Works

1. **User loads the app** → Lands on Home page (`/`)
2. **Clicks "Navigate to the map"** → Routes to `/atlas` (App.jsx)
3. **Map renders** → Shows US states filtered by current year (default 1500)
4. **User moves TimeSlider** → Updates year state → Filters visible states
5. **User hovers over state** → BorderLayer highlights it → Menu shows details
6. **User clicks state** → Map zooms to state bounds

### Data Flow
```
TimeSlider (year input)
    ↓
App.jsx (filters GeoJSON by year)
    ↓
BorderLayer (renders filtered features)
    ↓
User hovers → onFeatureHover callback
    ↓
App updates selectedState
    ↓
Menu displays state info
```

## Features

- **Historical Timeline**: View state boundaries as they changed from 1500-2025
- **Interactive Hover**: Highlight states on mouseover
- **Zoom to State**: Click any state to zoom to its boundaries
- **Info Sidebar**: Displays details about selected states
- **Responsive Map**: Pan and zoom with standard Leaflet controls
- **Color Coding**: States colored by density values

## Development Scripts

```bash
# Frontend (from /client directory)
npm run dev      # Start Vite dev server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Known Issues

### Server (server/index.js)
- Missing CORS import (cors is used but not imported)
- No server listener configured (app doesn't start)
- Variables declared without let/const/var
- API not integrated with frontend (frontend uses local JSON files)

## Future Enhancements

- [ ] Complete Express server setup
- [ ] Connect frontend to backend API
- [ ] Add animation feature (play through years automatically)
- [ ] Implement state search functionality
- [ ] Add color legend for density values
- [ ] Mobile-responsive design improvements
- [ ] Historical context and sources in Menu
- [ ] Export/share specific year views

## Resources

- [React Leaflet Documentation](https://react-leaflet.js.org/)
- [Leaflet.js API](https://leafletjs.com/)
- [GeoJSON Specification](https://geojson.org/)
- [React Router Docs](https://reactrouter.com/)
- [Vite Documentation](https://vite.dev/)

## Contributing

When making commits, use the following co-author format:
```
Co-authored-by: robeusanio11 <robeusanio@gmail.com>
```
