import Maps from '../components/Maps'
import { useAuthGuard } from '../hooks/useAuthGuard';
import { supabase } from '../services/Supabase';

export default function Home() {
  useAuthGuard();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/signin';
  };
  
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
    <button
      onClick={handleLogout}
      className="bg-black text-white py-2 rounded-md hover:bg-gray-900 transition mt-16"
    >
      sign out
    </button>
    </>
  )
}
