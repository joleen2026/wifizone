import React, { useState } from 'react';
import './Register.scss';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    // Redirection vers la page principale simulée
    navigate('/home');
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Créer un compte</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nom complet"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Numéro de téléphone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit">Valider</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
