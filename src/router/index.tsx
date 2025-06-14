import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from '../pages/auth/SignIn';
import Home from '../pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
