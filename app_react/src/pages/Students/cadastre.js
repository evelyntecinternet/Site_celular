import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import api from '../../config/configApi';

// export const AddUser = () => {
export default function AddStudents() {

    const [students, setStudents] = useState({
        stu_name: '',
        stu_login: '',
        stu_pass: ''
    });

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const valueInput = e => setStudents({ ...students, [e.target.name]: e.target.value });

    const addStudents = async e => {
        e.preventDefault();

        // const headers = {
        //     'headers': {
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + localStorage.getItem('token')
        //     }
        // };
        const headers = {
            'headers': {
                'Content-Type': 'application/json'
            }
        };

        // await api.post('/create-students', students, headers)
        //     .then((response) => {
        //         setStatus({
        //             type: 'success',
        //             mensagem: response.data.mensagem
        //         });
        //     }).catch((err) => {
        //         if (err.response) {
        //             setStatus({
        //                 type: 'error',
        //                 mensagem: err.response.data.mensagem
        //             });
        //         } else {
        //             setStatus({
        //                 type: 'error',
        //                 mensagem: "Erro: Tente novamente!"
        //             });
        //         }
        //     });
    }

    return (
        <div>
            {/* <Link to="/dashboard">Dashboard</Link><br />
            <Link to="/users">Usuários</Link><br /> */}

            <h1>Cadastrar Usuário</h1>

            {/* {status.type === 'error' ? <p>{status.mensagem}</p> : ""} */}
            {status.type === 'error' ? <p>error</p> : ""}
            {/* {status.type === 'success' ? <p>{status.mensagem}</p> : ""} */}
            {status.type === 'success' ? <p>ok</p> : ""}

            <p> {students.stu_name} </p>
            <p> {students.stu_login} </p>
            <p> {students.stu_pass} </p>

            <form onSubmit={addStudents}>
                <label>Nome: </label>
                <input type="text" name="stu_name" placeholder="Nome completo do usuário" onChange={valueInput} /><br /><br />

                <label>E-mail: </label>
                <input type="text" name="stu_login" placeholder="Melhor e-mail do usuário" onChange={valueInput} /><br /><br />

                <label>Senha: </label>
                <input type="password" name="stu_pass" placeholder="Senha para acessar o sistema" autoComplete="on" onChange={valueInput} /><br /><br />


                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};