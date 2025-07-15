import React, { useEffect, useState } from 'react';
import "./PopupOffre.scss";
import { useNavigate } from 'react-router-dom';

const PopupOffre = () => {

    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();

         useEffect(() => {
            const timer = setTimeout(() => {
                setVisible(true);
            }, 2000); // 3 secondes
                return () => clearTimeout(timer);
        }, []);

            const handleConnect = () => {
                setVisible(false);
                navigate('/Register'); // Redirige vers la page de connexion
            };

                if (!visible) return null;

                return (
                    <div className="popup-offre">
                    <div className="popup-contenu">
                        <h3>🎁 Offre spéciale !</h3>
                        <p>Connectez-vous maintenant et recevez <strong>100 Mo GRATUITS</strong> !</p>
                        <button onClick={handleConnect}>Se connecter</button>
                    </div>
                    </div>
                )
}

export default PopupOffre
