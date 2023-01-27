import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AuthPage from "./components/AuthPage";
import Cart from "./components/Cart";
import Collection from "./components/Collections";

import Contact from "./components/Contact";
import About from "./components/About"
import Phones from "./components/Phones";

import Gadgets from "./components/Gadgets";
import Watches from "./components/Watches";
import Laptops from "./components/Laptops";
import Phone from "./components/Phone";
import Gadget from "./components/Gadget";
import Watch from "./components/Watch";
import Laptop from "./components/Laptop";
import { LoginContext } from "./contexts/LoginContext";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(false)

  
  return (
    <>
      <LoginContext.Provider value={{firstName, setFirstName, lastName, setLastName, email, setEmail, password, setPassword, isLogin, setIsLogin}}>
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="collections" element={<Collection />} />
          <Route path="/collections/phones" element={<Phones />} />
          <Route path='/collections/phones/:id' element={<Phone />} />
          <Route path="/collections/gadgets" element={<Gadgets />} />
          <Route path='/collections/gadgets/:id' element={<Gadget />} />

          <Route path="/collections/watches" element={<Watches />} />
          <Route path='/collections/watches/:id' element={<Watch />} />

          <Route path="/collections/laptops" element={<Laptops />} />
          <Route path='/collections/laptops/:id' element={<Laptop />} />


          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path='login' element={<AuthPage />} />
        </Routes>
        <Footer />
      </LoginContext.Provider>

    </>
  );
}

export default App;
