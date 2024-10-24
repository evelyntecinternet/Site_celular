import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Styles from './index.module.css';
import Col  from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

export default function Celular(){
    return(
        <Container>
            <Row>
            <h1 style={{fontSize: "3em",textAlign: "center"}}>Histórias das grandes empresas !</h1>
            <hr />
            <h3 style={{fontSize: "3em",textAlign: "center"}}>Sansung</h3>
            <Image src="/images/sansung-h.jpg" fluid /> 
            <Col xs={12} sm={12} md={6} lg={6}>
                    <figure>
                        
                        <h4 style={{fontSize: "1em", textAlign:"center "}}>
                        A Samsung nasceu na Coreia do Sul em 1938 e se transformou em um dos maiores conglomerados do país e do mundo, com atuação em diversas áreas. 
                        Apesar da diversidade dos negócios, ela é mais conhecida globalmente pelos eletrônicos.
                        Fundada por Lee Byung-chul, a empresa teve origens modestas, dedicada à exportação de alimentos. 
                        Em poucos anos, a Samsung ampliou os negócios para entrar também em outros setores, incluindo comércio, finanças e têxtil.
                </h4>  
                    </figure>
                </Col>
                <hr />
            <h3 style={{fontSize: "3em",textAlign: "center"}}>Iphone</h3>
            <Image src="/images/iphone-h.jpg" fluid /> 
            <Col xs={12} sm={12} md={6} lg={6}>
                    <figure>
                        
                        <h4 style={{fontSize: "1em", textAlign:"center "}}>
                        A primeira geração do Iphone foi lançada em 29 de junho de 2007, apenas nos Estados Unidos e somente podiam ser adquiridos por clientes AT&T, 
                        sob contrato de 2 anos de duração. 
                        Os preços eram bem altos para a época, US$ 499 pela versão 4GB e US$ 599 pela versão 8 GB. 
                        A primeira versão do Iphone a chegar no Brasil foi o 3G, que começou a ser vendido por aqui apenas em a partir de 26 de setembro de 2008.
                        A primeira versão do aparelho não permitia que se instalasse aplicativos, ele vinha com seus 16 aplicativos que não podiam ser excluídos e, 
                        apesar disso, impressionou com suas novas funcionalidades. O sistema operacional e a “cara” do aparelho e aplicativos, 
                        revolucionaram o mercado e influenciaram todos os concorrentes e seus modelos futuros. Algumas semanas após o lançamento, 
                        um jovem hacker conseguiu desbloquear o aparelho através de uma solda na placa, o que permitiu que o aparelho pudesse ser usado fora dos EUA 
                        e aceitasse outros aplicativos.
                </h4>  
                    </figure>
                </Col>
                <hr />
            <h3 style={{fontSize: "3em",textAlign: "center"}}>Xiomi</h3>
            <Image src="/images/xiaomi-h.jpg" fluid /> 
            <Col xs={12} sm={12} md={6} lg={6}>
                    <figure>
                        
                        <h4 style={{fontSize: "1em", textAlign:"center "}}>
                        Fundada em 2010 por Lei Jun, um engenheiro de 48 anos que é ainda hoje o CEO da empresa, a Xiaomi chegou tarde a um dos mercados mais 
                        dinâmicos da economia mundial. 
                        A proposta que trazia era simples: smartphones bons, baratos e vendidos através da internet.
                        O cuidado colocado no marketing e nos eventos levaram a que a empresa fosse apelidada por alguns como a Apple da China.
                        Importa também dizer que Lei Jun já tinha atrás de si uma carreira como gestor de topo de várias empresas e também como investidor, 
                        e fez-se acompanhar na administração da Xiaomi por nomes como o de Lin Bin, que tinha sido vice-presidente do Google China Institute of Engineering. 
                        Tudo somado ajuda a explicar que a Xiaomi tenha sido a empresa que mais rapidamente atingiu uma avaliação de 45 mil milhões de dólares, 
                        depois de ter fechado um financiamento de 1,1 mil milhões de dólares em dezembro de 2014.
                </h4>  
                    </figure>
                </Col>
                <hr />
            <h3 style={{fontSize: "3em",textAlign: "center"}}>Motorola</h3>
            <Image src="/images/motorola-h.jpg" fluid /> 
            <Col xs={12} sm={12} md={6} lg={6}>
                    <figure>
                        
                        <h4 style={{fontSize: "1em", textAlign:"center "}}>
                        A companhia que hoje conhecemos como Motorola foi fundada em Chicago pelos irmãos Paul e Joseph Galvin, no dia 25 de setembro de 1928. 
                        A empresa possuía na época o nome de Galvin Manufacturing Corporation, devido ao sobrenome da família de seus fundadores, 
                        e contava com apenas cinco funcionários.
                        Mesmo com o número baixo de mão de obra, a GMC foi capaz de desenvolver um produto chamado eliminador de pilhas, 
                        que permitia que os rádios a pilha funcionassem conectados à corrente elétrica residencial padrão. 
                        O primeiro sucesso comercial da empresa aconteceu somente em 1930 com o lançamento de um rádio para automóvel, prático e de preço acessível. 
                        Paul criou o nome da marca do rádio automotivo (Motorola), 
                        unindo as palavras “motor” (em alusão ao movimento) e “ola” (como referência ao som, como em vitrola, por exemplo).
                </h4>  
                    </figure>
                </Col>
                <hr />
            <h3 style={{fontSize: "3em",textAlign: "center"}}>Realme</h3>
            <Image src="/images/realme-h.jpg" fluid /> 
            <Col xs={12} sm={12} md={6} lg={6}>
                    <figure>
                        
                        <h4 style={{fontSize: "1em", textAlign:"center "}}>
                        Sob o nome "OPPO Real", a realme deu as caras pela primeira vez na China em 2010.
                        A realme nasceu como uma divisão da OPPO Electronics Corporation até a sua separação em 2018, quando se tornou uma empresa independente.
                        Em 30 de julho de 2018, o ex-vice-presidente e chefe do departamento de negócios no exterior da OPPO, Sky Li, anunciou no Weibo sua saída oficial da OPPO e 
                        fez da realme uma marca independente. 
                        Ele afirmou que a realme se focaliza em fornecer telefones celulares que integram forte desempenho e modelo elegante.
                </h4>  
                    </figure>
                </Col>
            </Row>
        </Container>
    )
}