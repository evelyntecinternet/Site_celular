import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../config/configApi';

// export const AddUser = () => {
export default function User() {

    const [user, setUser] = useState({
        usr_name: '',
        usr_login: '',
        usr_pass: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    //Captura os dados do formulário
    const valueInput = e => setUser({ ...user, [e.target.name]: e.target.value });
    
    const addUser = async e => {
        e.preventDefault();

        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        await api.post('/create-users', user, headers)
            .then((response) => {
                setStatus({
                    type: 'success',
                    mensagem: response.data.mensagem
                });
            }).catch((err) => {
                if (err.response) {
                    setStatus({
                        type: 'error',
                        mensagem: err.response.data.mensagem
                    });
                } else {
                    setStatus({
                        type: 'error',
                        mensagem: "Erro: Tente novamente!"
                    });
                }
            });
    }

    return (
        <div>
            <h1>Cadastrar Usuário</h1>

            {/* {status.type === 'error' ? <p>{status.mensagem}</p> : ""} */}
            {status.type === 'error' ? <p>error</p> : ""}
            {/* {status.type === 'success' ? <p>{status.mensagem}</p> : ""} */}
            {status.type === 'success' ? <p>ok</p> : ""}

            <form onSubmit={addUser} style={{ margin: '20px'}}>
            {/* <form style={{ margin: '20px'}}> */}
                <label>Nome: </label>
                <input type="text" name="usr_name" placeholder="Nome completo do usuário" onChange={valueInput} /><br /><br />

                <label>Login: </label>
                <input type="text" name="usr_login" placeholder="Melhor e-mail do usuário" onChange={valueInput} /><br /><br />

                <label>Senha: </label>
                <input type="password" name="usr_pass" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} /><br /><br />

                {/* <input type="text" /> */}

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};