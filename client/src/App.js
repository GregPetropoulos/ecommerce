import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from 'react-router-dom';

//PUBLIC
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import Blog1 from './pages/Blog1';
import Blog2 from './pages/Blog2';
import SiteFooter from './components/SiteFooter';
import BackToTop from './components/BackToTop';

//AUTH
import MyAccount from './components/MyAccount';
import Success from './pages/Success';
import Cancel from './pages/Cancel';
import { PrivateOutlet } from './utils/PrivateOutlet';
import RequireAuth from './features/auth/RequireAuth';
// import Welcome from './features/auth/Welcome';
import Cart from './components/Cart';

//TOAST
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Women from './pages/Women';
import ProductDetailPage from './pages/ProductDetailPage';
import { products } from './data/products';
import ProductPage from './components/ProductPage';

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

          {/* Womens nested routes */}
          <Route path='women' element={<Women products={products} />}>
            <Route
              path='product/:id'
              element={<ProductDetailPage products={products} />}
            />
          </Route>
          <Route path='men' element={<Blog1 />} />
          <Route path='gear' element={<Blog1 />} />
          <Route path='blog1' element={<Blog1 />} />
          <Route path='blog2' element={<Blog2 />} />

          {/* Protected Routes */}
          <Route element={<RequireAuth />}>
            {/* <Route path='welcome' element={<Welcome />} /> */}
            <Route path='myaccount' element={<MyAccount />} />
            <Route path='cart' element={<Cart />} />
            <Route path='success' element={<Success />} />
            <Route path='cancel' element={<Cancel />} />
          </Route>
        </Route>
      </Routes>
      <BackToTop />
      <SiteFooter />
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </Router>
  );
}

export default App;
