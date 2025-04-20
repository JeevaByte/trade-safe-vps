
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Data centers locations
const dataCenters = [
  { name: 'New York (NY4)', coordinates: [-74.0060, 40.7128] },
  { name: 'London (LD4)', coordinates: [-0.1276, 51.5074] },
  { name: 'Tokyo (TY3)', coordinates: [139.6917, 35.6895] },
  { name: 'Sydney (SY1)', coordinates: [151.2093, -33.8688] }
];

interface MapProps {
  apiKey: string;
}

const DataCenterMap: React.FC<MapProps> = ({ apiKey }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current || !apiKey) return;

    mapboxgl.accessToken = apiKey;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/light-v11',
      center: [30, 15],
      zoom: 1.5,
      projection: 'globe'
    });

    // Add markers for each data center
    dataCenters.forEach(({ name, coordinates }) => {
      const markerElement = document.createElement('div');
      markerElement.className = 'w-4 h-4 bg-precision-purple rounded-full border-2 border-white';
      
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(`<div class="font-medium">${name}</div>`);

      new mapboxgl.Marker(markerElement)
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map.current!);
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add atmosphere and fog effects
    map.current.on('style.load', () => {
      map.current?.setFog({
        color: 'rgb(255, 255, 255)',
        'high-color': 'rgb(200, 200, 225)',
        'horizon-blend': 0.2
      });
    });

    return () => {
      map.current?.remove();
    };
  }, [apiKey]);

  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default DataCenterMap;
