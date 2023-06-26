import { Link, Route, Routes } from 'react-router-dom';
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
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';





function App() {
  const { t, i18n } = useTranslation();

 /*const langToEn = ()=> {
  i18n.changeLanguage("en");
  localStorage.setItem("language","en");
}
const langToEe = ()=> {
  i18n.changeLanguage("ee");
  localStorage.setItem("language","en");
}*/ 
const langChange = (languageClicked)=> {
  i18n.changeLanguage(languageClicked);
  localStorage.setItem("language",languageClicked);
}

  return (
    <div className="App">
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/homepage">SuperPawnTechShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
          </Nav>
          <Nav>
             <img className='lang' src="/united-kingdom.png" onClick={() => langChange("en")} alt="" />
             <img className='lang' src="/estonia.png" onClick={() => langChange("ee")} alt="" />
            <Nav.Link as={Link} to="/cart">
            <img className='cart' src="/shoppingcart.png" alt="Cart" /> {t("")}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      <Routes>
        <Route path="" element={<FirstPage />} />
        <Route path="homepage" element={<HomePage />} />
        <Route path="cart" element={<Cart/>} />
        <Route path="shops" element={<Shops />} />
        <Route path="product/:id" element={<SingelProduct />} />
        <Route path="contact" element={ <ContactUs/>} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct/>} />
        <Route path="admin/edit-product/:id" element={<EditProduct />} />
        <Route path="admin/maintain-product" element={<MaintainProduct />} />
        <Route path="admin/maintain-categories" element={<MaintainCategories />} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        </Routes>
    </div>
  );
}

export default App;
//error 25.05 videos kus kasutati homepage mitteaktiivne siis ära näita ei tööta !!!
//kuidas tooteid lisada et jäävadki sinna isegi peale refreshi vajutust
//Cart.css prügikasti märk jookseb euro märgi sisse