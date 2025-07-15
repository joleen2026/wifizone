import React from 'react';
import "./Forfaits.scss";

const forfaitsData = [
  {
    nom: "Pass Express",
    description: "Ideale pour une consultation rapide",
    duree: "30 mins",
    debit: "1Mbps",
    prix: "100 FCFA"
  },
  {
    nom: "Pass Hour",
    description: "Ideale pour une connexion fiable",
    duree: "60 mins",
    debit: "2Mbps",
    prix: "200 FCFA"
  },
  {
    nom: "Pass Day",
    description: "Ideale pour une navigation reguliere",
    duree: "24 heures",
    debit: "2Mbps",
    prix: "500 FCFA"
  },
  {
    nom: "Pass Business",
    description: "Ideale pour une consultation journaliere",
    duree: "3 jours",
    debit: "2Mbps",
    prix: "1000 FCFA"
  },
  {
    nom: "Pass Pro",
    description: "Pour toute le teletravail, pro, voip",
    duree: "1 semaine",
    debit: "3Mbps",
    prix: "2000 FCFA"
  },
  {
    nom: "Pass Family",
    description: "Pour toute la famille ou le groupe",
    duree: "30 jours",
    debit: "illimite",
    prix: "4000 FCFA"
  }
];

const Forfaits = () => {
  return (
    <div className='sous-conteneur-forfaits'>
      <span className="titre">Les Forfaits</span>
      <h2>Nos meilleurs forfaits</h2>
      <div className="conteneur-slide">
        <div className="suivi-slide">
            {forfaitsData.map((f, idx) => (
            <div className="carte-forfaits" key={idx}>
                <h3 className='nom'><span>{f.nom}</span></h3>
                <p className='description'>{f.description}</p>
                <p className='duree'>Duree: {f.duree}</p>
                <p className='debit'>Debit: {f.debit}</p>
                <span className='prix'>{f.prix}</span>
            </div>
            ))}
        </div>
         <div className="suivi-slide">
            {forfaitsData.map((f, idx) => (
            <div className="carte-forfaits" key={idx}>
                <h3 className='nom'><span>{f.nom}</span></h3>
                <p className='description'>{f.description}</p>
                <p className='duree'>Duree: {f.duree}</p>
                <p className='debit'>Debit: {f.debit}</p>
                <span className='prix'>{f.prix}</span>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Forfaits
