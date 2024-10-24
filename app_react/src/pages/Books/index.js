import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';

export default function Books() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        //fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
         fetch('http://localhost:4000/select-books')
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