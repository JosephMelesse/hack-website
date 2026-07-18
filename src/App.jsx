import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data.json";
import Nav from "./components/Nav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Menu from "./pages/Menu.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  // false = English, true = Spanish (see DESIGN.md §1)
  const [spanish, setSpanish] = useState(false);
  const t = data?.[spanish ? "es" : "en"];

  useEffect(() => {
    document.documentElement.lang = spanish ? "es" : "en";
  }, [spanish]);

  return (
    <BrowserRouter>
      <Nav t={t} spanish={spanish} onToggle={() => setSpanish((s) => !s)} />
      <main>
        <Routes>
          <Route path="/" element={<Home t={t} />} />
          <Route path="/menu" element={<Menu t={t} />} />
          <Route path="/about" element={<About t={t} />} />
          <Route path="/contact" element={<Contact t={t} />} />
        </Routes>
      </main>
      <Footer t={t} />
    </BrowserRouter>
  );
}

export default App;
