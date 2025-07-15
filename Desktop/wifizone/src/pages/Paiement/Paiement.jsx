import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Paiement.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Paiement = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const forfaitData = location.state;

  const [numeroBeneficiaire, setNumeroBeneficiaire] = useState("");
  const [numeroPayeur, setNumeroPayeur] = useState("");
  const [showToast, setShowToast] = useState(false);

  if (!forfaitData) {
    return (
      <div className="paiement-page">
        <div className="paiement-container">
          <h2 className="titre">Données manquantes</h2>
          <p>Aucun forfait sélectionné. Veuillez retourner à la page des forfaits.</p>
          <button onClick={() => navigate("/home")}>Retour aux forfaits</button>
        </div>
        
      </div>
    );
  }

  const handlePaiement = (e) => {
    e.preventDefault();

    // Simuler succès du paiement
    setShowToast(true);

    // Attendre 2s puis rediriger vers la page des forfaits
    setTimeout(() => {
      setShowToast(false);
      navigate("/home");
    }, 2000);
  };

  return (
    <div className="paiement-page">
      

      <div className="paiement-container">
        <h2 className="titre">Paiement du forfait</h2>
        <form onSubmit={handlePaiement}>
          <input
            type="tel"
            placeholder="Numéro du bénéficiaire"
            value={numeroBeneficiaire}
            onChange={(e) => setNumeroBeneficiaire(e.target.value)}
            required
          />
          <input type="text" value={forfaitData.nom} readOnly />
          <input type="text" value={forfaitData.prix} readOnly />
          <input
            type="tel"
            placeholder="Numéro du payeur"
            value={numeroPayeur}
            onChange={(e) => setNumeroPayeur(e.target.value)}
            required
          />
          <button type="submit">Effectuer le paiement</button>
        </form>
      </div>

      {showToast && (
        <div className="toast-success">
          ✅ Paiement effectué avec succès !
        </div>
      )}
    </div>
  );
};

export default Paiement;
