import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useTranslation } from 'react-i18next';
import { CartSumContext } from '../store/CartSumContext';
import { AuthContext } from '../store/AuthContext';


function NavigationBar() {
    const { t, i18n } = useTranslation();
    const { cartSum } = useContext(CartSumContext);
    const { loggedIn, setLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate();

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
   const logout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("token");
    navigate("/homepage");
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <img className='money' src="/money.png" alt="" style={{ marginRight: '10px'}} />
        <Navbar.Brand as={Link} to="/homepage">SuperPawnTechShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {loggedIn === true &&  <Nav.Link as={Link} to="/admin">{t("admin")}</Nav.Link>}
            <Nav.Link as={Link} to="/contact">{t("contact")}</Nav.Link>
            <Nav.Link as={Link} to="/shops">{t("shops")}</Nav.Link>
          </Nav>
          <Nav>
          {loggedIn === false &&
           <>
           <Nav.Link as={Link} to="/login">{t("Logi sisse")}</Nav.Link> 
           <Nav.Link as={Link} to="/signup">{t("Registreeru")}</Nav.Link>
           </> }
           {loggedIn === true && <button style={{ borderRadius:'80px' }} onClick={logout}>
             <img className='logout' src="logout.png" alt="Logout" /> </button>}
             <img className='lang' src="/united-kingdom.png" onClick={() => langChange("en")} alt="" />
             <img className='lang' src="/estonia.png" onClick={() => langChange("ee")} alt="" />
            <Nav.Link as={Link} to="/cart">
            <img className='cart' src="/shoppingcart.png" alt="Cart" /> {t("")}</Nav.Link>
            <div className="cartsumvalue" style={{ color: 'white' }}>{cartSum} €</div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar