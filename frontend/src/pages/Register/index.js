import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import './style.css';

import api from '../../service/api';
import ImgLogo from '../../assets/logo.svg'

export default function Register(){
    const history = useHistory();

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ city, setCity ] = useState('');
    const [ uf, setUf ] = useState('');


    async function handleRegister(event) {
        event.preventDefault();
        const data = { name, email, whatsapp, city, uf };
        console.log(data);

        try {
            const response = await api.post('/ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        }
        catch(err) {
            alert('Erro ao realizar o cadastro');
            console.log(err);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={ImgLogo} alt="Be the hero"/>
                    <h1>Cadastro</h1>
                    <p>
                        Faça já o se cadastro, entre na plataforma e ajude pessoas a
                        encontrarem os casis da sua ONG!
                    </p>
                    <Link className="back-link" to="/"><FiArrowLeft size={16} color="#e02041" /> Já tenho cadastro</Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input
                        type="text" 
                        placeholder="Nome da ONG" 
                        value={name} 
                        onChange={ event => setName(event.target.value) }
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={ event => setEmail(event.target.value) }
                    />
                    <input 
                        type="number" 
                        placeholder="Número de WhatsApp" 
                        value={whatsapp} 
                        onChange={ event => setWhatsapp(event.target.value) }
                    />
                    <div className="input-group">
                        <input 
                            type="text" 
                            placeholder="Cidade" 
                            value={city} 
                            onChange={ event => setCity(event.target.value) }
                        />
                        <input 
                            type="text" 
                            placeholder="UF" 
                            value={uf} 
                            onChange={ event => setUf(event.target.value) }
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar ONG</button>
                </form>
            </div>
        </div>
    );
}
