//import serve para importar componentes
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardImage from 'components/CardImage';
//import Accordion from 'components/Accordion'
import celularjson from 'json/celular.json';
import  Carousel  from 'components/Carousel';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import  Overlay  from 'components/Overlay'

export default function Home() {
    return (
        <>
        <Carousel />
        <Container>
        <h1>
            Compre já o seu celular !!
         </h1><Overlay />
         <hr />
         <h6>
            Aproveite já as oportunidades!!
         </h6>
            <Row>
                {
                    celularjson.data.map((json) => {
                        return <CardImage {...json} key={json.id} />
                    })
                }
            </Row>
            <hr />
            
        </Container>
        <Container>
        <Row>
                <Col xs={12} sm={12} md={6} lg={6}>
                    <figure>
                        <Image src="/images/pessoa.jpg" fluid />
                    </figure>
                </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
            <h2 style={{fontSize: "3em",textAlign: "center"}}>Buscando novidades?!</h2>
                <p>
                  Então compre um de nossos celulares e teste
                  as suas diversas funções.
                  Explore jogos, filmes para assistir com a família,
                  desenhos para todas as idades e muito outros recursos
                  para nunca ficar entediado ou desinformado.
                  Conheça os nossos mais novos celulares que chegaram no mercado!
                  E fique por dentro de todas novidades!
                </p>  
                <Image src='/images/icon.jpg' fluid /> 
                </Col>
                <hr/> 
                <Col xs={12} sm={12} md={6} lg={6}>
                <h2 style={{fontSize: "3em",textAlign: "center"}}>Buscando novidades?!</h2>
                <p>
                Smartphone Motorola Razr 40 256GB Vanilla 5G Snapdragon 8GB RAM 6,9" Câm. Dupla + Selfie 64MP
Para você que está a procura de um novo smartphone e dar aquele upgrade no seu dia a dia, seja no trabalho ou para navegar nas redes sociais, precisa conhecer 
o Motorola Razr 40 na cor vanilla. Ele possui 256GB de armazenamento interno para guardar diversos aplicativos, fotos e vídeos, memória RAM de 8GB + 2GB RAM Boost e 
processador Snapdragon 7 Gen 1. A tela dele é de 6,9" na principal e 1,47" na externa, a câmera traseira é dupla de 64MP OIS + 13MP, perfeita para tirar muitas fotos e a 
frontal de 64MP, faz selfies que ficam ótimas para postar nas redes sociais. E ainda, é 1 Chip + e-SIM e tecnologia 5G, oferece leitor de impressão digital, 
desbloqueio facial, bateria de 4200 mAh que dura bastante tempo e carregamento TurboPower 33W e Wireless 5W. Produto não acompanha fone de ouvido.
                </p>  
                <Image src='/images/icon-2.jpg' fluid /> 
                </Col>
            <Col xs={12} sm={12} md={4} lg={4}>
            <figure>
                        <Image src="/images/caminho.jpg" fluid />
                    </figure>
                </Col>  
                
            </Row>
          
            </Container> 
            
       </>
    )
}