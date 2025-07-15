import React from 'react';
import './Etapes.scss';

const etapes = [
  { titre: "1. Choisir le forfait", description: "Consulter la liste des forfaits disponibles;Sélectionnez le forfait adapté à vos besoins." },
  { titre: "2. Creer un compte", description: "Cliquez sur acheter un forfait et entrer vos informations ainsi que votre mot de passe pour pouvoir effectuer un paiement" },
  { titre: "3. Effectuer le paiement", description: "En fonction de votre operateur, entrez votre numero et cofirmer votre nom; Ensuite validez la transaction" }
];

const Etapes = () => {
  return (
    <div className="conteneur-etapes">
          <div className="sous-conteneur-etapes">
            <h2>comment ca marche?</h2>
            <p>Pour utiliser WifiZone, suivez ces étapes simples :</p> 
              <div className='etapes-grid'>
                {etapes.map((e, idx) => (
                  <div className="etape" key={idx}>
                    <h3>{e.titre}</h3>
                    <p>{e.description}</p>
                    {idx === 0 && <button className="etape-btn">Forfait</button>}
                    {idx === 1 && <button className="etape-btn">S'inscrire</button>}
                    {idx === 2 && <button className="etape-btn">Se connecter</button>}
                  </div>
                ))}
              </div>
          </div>
    </div>
  )
}

export default Etapes
