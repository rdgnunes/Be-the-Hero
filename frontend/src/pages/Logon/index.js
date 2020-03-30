import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiLogIn} from 'react-icons/fi'
import './style.css';

import api from '../../service/api';

import ImgLogo from '../../assets/logo.svg'
import ImgHeroes from '../../assets/heroes.png'

export default function Logon(){ 
    
    const [ id, setId ] = useState('');
    const history = useHistory();

    async function handleLogin(event) {
        event.preventDefault();

        try {
            const response = await api.post('session', { id });

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }
        catch(err) {
            alert('Ops! ONG não cadastrada!');
            console.log(err);
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={ImgLogo} alt="Be the Hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input 
                    placeholder="Seu ID"
                    onChange={ (event) => setId(event.target.value) } />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register"><FiLogIn size={16} color="#e02041" /> Não tenho cadastro</Link>
                </form>
            </section>
            <img src={ImgHeroes} alt="Heroes" />
        </div>
    );
}
