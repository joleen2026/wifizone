import React from 'react';
import './ForfaitsStatic.scss';
import { useNavigate } from "react-router-dom";


const forfaitsData = [
  { nom: "Pass Express", description: "Idéale pour une consultation rapide", duree: "30 mins", debit: "1Mbps", prix: "100 FCFA" },
  { nom: "Pass Hour", description: "Idéale pour une connexion fiable", duree: "60 mins", debit: "2Mbps", prix: "200 FCFA" },
  { nom: "Pass Day", description: "Idéale pour une navigation régulière", duree: "24 heures", debit: "2Mbps", prix: "500 FCFA" },
  { nom: "Pass Business", description: "Idéale pour une consultation journalière", duree: "3 jours", debit: "2Mbps", prix: "1000 FCFA" },
  { nom: "Pass Pro", description: "Pour tout le télétravail, pro, voip", duree: "1 semaine", debit: "3Mbps", prix: "2000 FCFA" },
  { nom: "Pass Family", description: "Pour toute la famille ou le groupe", duree: "30 jours", debit: "illimité", prix: "4000 FCFA" }
];


const ForfaitsStatic = () => {

    const navigate = useNavigate();

    const handleClick = (forfait) => {
    navigate('/paiement', {
      state: {
        nom: forfait.nom,
        prix: forfait.prix
      }
    });
  };
  
  return (
    <div className="forfaits-static">
      <h2 className="titre">Nos forfaits</h2>
      <div className="grille-forfaits">
        {forfaitsData.map((f, idx) => (
          <div className="carte-forfaits"onClick={() => handleClick(f)}>
            <h3>{f.nom}</h3>
            <p>{f.description}</p>
            <p>Duree: {f.duree}</p>
            <p>Debit: {f.debit}</p>
            <p className="prix">{f.prix}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForfaitsStatic;
