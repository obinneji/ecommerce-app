import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import AuthPage from "./components/AuthPage";
import Cart from "./components/Cart";
import Collection from "./components/Collections";
import Contact from "./components/Contact";
import About from "./components/About"



function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/"  element={<Dashboard />} />
      <Route path="collections" element={<Collection />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="cart" element={<Cart />} />
      <Route path='login' element={<AuthPage />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
