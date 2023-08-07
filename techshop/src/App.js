import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/global/HomePage';
import FirstPage from './pages/global/FirstPage';
import Cart from './pages/global/Cart';
import SingelProduct from './pages/global/SingelProduct';
import Shops from './pages/global/Shops';
import {ContactUs }from './pages/global/ContactUs';
import AdminHome from './pages/admin/AdminHome';
import AddProduct from './pages/admin/AddProduct';
import EditProduct from './pages/admin/EditProduct';
import MaintainProduct from './pages/admin/MaintainProduct';
import MaintainCategories from './pages/admin/MaintainCategories';
import MaintainShops from './pages/admin/MaintainShops';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import NavigationBar from './components/NavigationBar';
import { useContext } from 'react';
import { AuthContext } from './store/AuthContext';
import NotFound from './pages/global/NotFound';
//import MyAccount from './pages/global/MyAccount';


function App() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="App">
     <NavigationBar />
      
      <Routes>
        <Route path="" element={<FirstPage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="shops" element={<Shops />} />
        <Route path="product/:id" element={<SingelProduct />} />
        <Route path="contact" element={ <ContactUs/>} />
        {loggedIn === true &&
        <>
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct/>} />
        <Route path="admin/edit-product/:id" element={<EditProduct />} /> 
        <Route path="admin/maintain-product" element={<MaintainProduct />} />
        <Route path="admin/maintain-categories" element={<MaintainCategories />} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        </>}
        <Route path="login" element={<Login />} /> 
         <Route path="signup" element={<Signup />} /> 
       {/* <Route path="myaccount" element={ <MyAccount />} />  edit prduct ees peab ka olema / */ }
        <Route path="*" element={ < NotFound /> } />
        </Routes>
    </div>
  );
}

export default App;
//error 25.05 videos kus kasutati homepage mitteaktiivne siis ära näita ei tööta !!!
//kuidas tooteid lisada et jäävadki sinna isegi peale refreshi vajutust
//Cart.css prügikasti märk jookseb euro märgi sisse