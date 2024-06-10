import React, { useState } from "react";
import './Newsletter.scss';

const Newsletter = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicionar a lógica de envio do e-mail aqui
        console.log('E-mail enviado:', email);
    };

    return (
        <section className="newsletter">
            <form className="newsletter-signup" onSubmit={handleSubmit}>
                <div className="newsletter-container">
                    <h1>Recebe Nossa Newsletter</h1>
                    <div className="input-button-container">
                        <input
                            type="email"
                            placeholder="Digite seu e-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <button className="nl-btn" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default Newsletter;