import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Maps from './components/Maps'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{ padding: '20px' }}>
      <h1>Aplikasi Peta Saya (Leaflet)</h1>
      <Maps
        centerLat={-6.917464} // Contoh koordinat Bandung
        centerLng={107.619123} // Contoh koordinat Bandung
        markerLat={-6.917464} // Marker di pusat peta
        markerLng={107.619123}
        popupText="Ini Bandung!"
        zoom={14}
      />
      <p>Ini adalah peta Leaflet (OpenStreetMap) di aplikasi React TypeScript Anda!</p>
    </div>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </>
  )
}

export default App
