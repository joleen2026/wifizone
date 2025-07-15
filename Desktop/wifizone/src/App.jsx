import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Forfaits from "./components/Forfaits/Forfaits";
import Footer from "./components/Footer/Footer";
import PopupOffre from './components/PopupOffre/PopupOffre';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Etapes from "./pages/Etapes/Etapes";
import Telecharger from "./pages/Telecharger/Telecharger";
import Contact from "./pages/Contact/Contact";
import Register from './pages/Register/Register';
import Home from './pages/Home/Home'; 
import Paiement from "./pages/Paiement/Paiement";



function App() {
  
  return (
    <Router>
      <div className="app">
        <Navbar />
        <PopupOffre />
        
        <Routes>
          {/* Page d'accueil avec ses sections */}
          <Route
            path="/"
            element={
              <>
                <section id="forfaits" className="conteneur-forfaits">
                  <div className="forfaits">
                    <Forfaits />
                  </div>
                </section>
              </>
            }
          />

          {/* Pages spécifiques */}
          <Route path="/etapes" element={<Etapes />} />
          <Route path="/telecharger" element={<Telecharger />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/paiement" element={<Paiement />} />
          

        </Routes>

        <section className="conteneur-footer">
          <div className="footer">
            <Footer />
          </div>
        </section>
      </div>
    </Router>
  );
}

export default App
