import React, {useState} from "react";

import './Newsletter.scss'

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
      // Adicionar a lógica de envio do e-mail aqui
      console.log('E-mail enviado:', email);
    };
  
    return (
        <form className="newsletter-signup" onSubmit={handleSubmit}>
            <div className="newsletter-container">
                <h1>Recebe Nossa Newsletter</h1>
                <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit">Enviar</button>
            </div>
      </form>
    );
};

export default Newsletter;