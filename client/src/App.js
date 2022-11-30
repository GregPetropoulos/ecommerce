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
import { PrivateOutlet } from './utils/PrivateOutlet';
import RequireAuth from './features/auth/RequireAuth';
import Welcome from './features/auth/Welcome';
import Layout from './components/Layout';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='blog1' element={<Blog1 />} />
          <Route path='blog2' element={<Blog2 />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            <Route path='welcome' element={<Welcome />} />
            <Route path='myaccount' element={<MyAccount />} />
            <Route path='/success' element={<Success />} />
            <Route path='/cancel' element={<Cancel />} />
          </Route>
        </Route>
      </Routes>
      <BackToTop />
      <SiteFooter />
    </Router>
  );
}

export default App;
