import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/global/HomePage';
import FirstPage from './pages/global/FirstPage';
import Cart from './pages/global/Cart';
import SingelProduct from './pages/global/SingelProduct';
import Shops from './pages/global/Shops';
import ContactUs from './pages/global/ContactUs';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProduct from './pages/admin/MaintainProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="" element={<FirstPage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="shops" element={<Shops />} />
        <Route path="product" element={<SingelProduct />} />
        <Route path="contact" element={ <ContactUs/>} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct/>} />
        <Route path="admin/edit-product" element={<EditProduct />} />
        <Route path="admin/maintain-product" element={<MaintainProduct />} />
        <Route path="admin/maintain-categories" element={<MaintainCategories />} />
        <Route path="admin/maintain-shop" element={<MaintainShops />} />
        </Routes>
    </div>
  );
}

export default App;
