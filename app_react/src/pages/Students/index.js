import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
         fetch('http://localhost:4000/select-bookd') // Está acessando esses dados
            .then(response => response.json())
            .then(data => {
                setBooks(data.books);
            })
            .catch(error => console.error('Erro ao carregar Books:', error));
    }, []);
    return (
        <Container>
            <Row>
                {books.map(json => (
                    <p>{json.boo_id} - {json.boo_name} - {json.boo_description}</p>
                ))}
            </Row>
        </Container>
    )
}

//useState é um Hook do react para trabalhar com o estado em componentes. Com este é possível iniciar e atualizar o estado de uma função
//useEffect é outro hook do React usado para executar efeitos colaterais em componentes funcionais, qualquer operação que não seja diretamente relacionada à renderização do componente, como chamadas de API, manipulação de DOM


// {
//     dbjson.data.map((json) => {
//         return <CardImage {...json} key={json.id} />
//     })
// }