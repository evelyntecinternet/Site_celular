import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="http://localhost:3000">Phone_magazine</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://www.samsung.com/br/">Sansung</Nav.Link>
          <Nav.Link href="https://www.apple.com/br/iphone/?afid=p238%7Cs4CasUwGV-dc_mtid_209258i342853_pcrid_692723484928_pgrid_154272763420_pexid__&cid=wwa-br-kwgo-iphone-slid--Brand-iPhone-Evergreen-">Iphone</Nav.Link>
          <Nav.Link href="https://lojamidobroficial.com/products/mi-smart-band-7?variant=40785445126280&gad_source=1&gclid=CjwKCAjw65-zBhBkEiwAjrqRMAUou0-8FPeO9ESywY3uSa3LMGUhb-uA5U6mvx35HG8wMCMQyr4m7xoCsosQAvD_BwE">Xiomi</Nav.Link>  
          <Nav.Link href="https://www.motorola.com.br/">Motorola</Nav.Link>  
          <Nav.Link href="https://www.realme.com/br/">Realme</Nav.Link>  
          <Nav.Link href="/Celular">Histórias</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;