import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import MegaMenu from './Components/MegaMenu';
import Footer from './Components/Footer';
import Faq from './views/Faq';
import AboutUs from './views/AboutUs';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Contact from './views/Contact';
import Groceries from './views/Groceries';
import HouseHold from './views/HouseHold';
import PersonalCare from './views/PersonalCare';
import Gourment from './views/Gourment';
import PackagedFood from './views/PackagedFood';
import Beverage from './views/Beverage';
import Offer from './views/Offer';
import Products from './views/Products';
import Cart from './views/Cart';
import SingleProduct from './views/SingleProduct';

import ScrollButton from './Components/ScrollButton';

function App() {
  return (
    <>
      <Router>
        <Header />
        <MegaMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/faqs" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pizza" element={<Groceries />} />
          <Route path="/momo" element={<HouseHold />} />
          <Route path="/noodles" element={<PersonalCare />} />
          <Route path="/sandwich" element={<Gourment />} />
          <Route path="/chilli" element={<PackagedFood />} />
          <Route path="/rice" element={<Beverage />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart/:slug/:id" element={<Cart />} />
          <Route path="/product/:slug/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </Router>
      <ScrollButton />
    </>
  );
}

export default App;
