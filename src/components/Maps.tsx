import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Pastikan CSS Leaflet diimport

// Penting: Leaflet memerlukan ikon default untuk marker
// Ini adalah workaround untuk masalah ikon default di React-Leaflet
import L from 'leaflet';
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png';
import iconUrl from 'leaflet/dist/images/marker-icon.png';
import shadowUrl from 'leaflet/dist/images/marker-shadow.png';

L.Marker.prototype.options.icon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

interface MyLeafletMapProps {
  centerLat?: number;
  centerLng?: number;
  zoom?: number;
  markerLat?: number;
  markerLng?: number;
  popupText?: string;
}

const MyLeafletMap: React.FC<MyLeafletMapProps> = ({
  centerLat = -6.917464,
  centerLng = 107.619123,
  zoom = 13,
  markerLat,
  markerLng,
  popupText = "Lokasi Saya"
}) => {
  const position: [number, number] = [centerLat, centerLng];
  const markerPosition: [number, number] | undefined =
    markerLat && markerLng ? [markerLat, markerLng] : undefined;

  return (
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markerPosition && (
        <Marker position={markerPosition}>
          <Popup>{popupText}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default MyLeafletMap;