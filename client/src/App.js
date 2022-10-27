import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import BackToTop from "./components/BackToTop";

function App() {
  return (

    <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path='/cancel' element={<Cancel/>}/>
        </Routes>
        <BackToTop/>
      </Router>
  );
}

export default App;
