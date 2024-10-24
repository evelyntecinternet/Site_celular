import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import React, { useState, useEffect } from 'react';

export default function Movies() {
    const [music, setMusic] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/professornelcimariano/lista_js/db')
            .then(response => response.json())
            .then(data => {
                setMusic(data.videos);
            })
            .catch(error => console.error('Erro ao carregar os vídeos:', error));
    }, []);
    return (
        <Container>
            <Row>
                {music.map(json => (
                    <p>{json.id} - {json.titulo}</p>
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