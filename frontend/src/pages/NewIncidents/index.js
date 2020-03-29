import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {  FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import './style.css';

export default function NewIncidents(){
    const [title, setTitle ] = useState('');
    const [description, setDescription ] = useState('');
    const [value, setValue ] = useState('');
    
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewFunction(e) {
        e.preventDefault();

        const data = {
            title, 
            description,
            value,
        };

        history.push('/profile')
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            })
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente!')
        }

    }

    return (
        <div className="new-incidents-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastro novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um Herói para resolver isso!!!</p>

                <Link className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041"  />
                    Voltar para home
                </Link>
            </section>
            <form onSubmit={handleNewFunction}>
                <input 
                placeholder="Titulo do caso" 
                value ={title}
                onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                placeholder="Descrição" 
                value ={description}
                onChange={e => setDescription(e.target.value)}
               />
                <input 
                placeholder="Valor em reais" 
                value ={value}
                onChange={e => setValue(e.target.value)}
               />

                <button className="button" type="submit">Cadastrar</button>

            </form>
        </div>
    </div>
    );
}