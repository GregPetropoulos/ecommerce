import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
import Register from './components/Register';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import SiteFooter from './components/SiteFooter';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/myaccount' element={<MyAccount />} />
        <Route path='/register' element={<Register />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
        <Route path='/blog1' element={<Blog1 />} />
        <Route path='/blog2' element={<Blog2 />} />
      </Routes>
      <BackToTop />
      <SiteFooter/>
    </Router>
  );
}

export default App;
