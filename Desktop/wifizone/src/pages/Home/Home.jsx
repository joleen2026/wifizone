import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
//import Accueil from '../components/Accueil/Accueil';
import Forfaits from '../../components/Forfaits/ForfaitsStatic'; // version statique (non scroll)
import Etapes from "../Etapes/Etapes";
import Telecharger from "../Telecharger/Telecharger";
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className="home-page">
      
      <section className="conteneur-forfaits">
        <div className="forfaits">
          <Forfaits />
        </div>
      </section>

      <section className="conteneur-etapes">
        <Etapes />
      </section>

      <section className="conteneur-telecharger">
        <Telecharger />
      </section>
    </div>
  );
};

export default Home;
