import Footer from "./components/Footer";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Header />
    <Routes>
      {/* <Route path="/" element={<Dashboard /> } /> */}
      {/* <Route path="contact" element={<Contact />} /> */}
      {/* <Route path="about" element={<About />} /> */}
      {/* <Route path="collections" element={<Collections />} /> */}
      {/* <Route path='cart' element={<Cart />} /> */}
    </Routes>
    <Footer />
    </>
  );
}

export default App;
