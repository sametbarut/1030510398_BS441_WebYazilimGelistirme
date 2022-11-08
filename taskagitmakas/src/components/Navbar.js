import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <div  class="position-absolute top-0 start-50 translate-middle-x">
                <Navbar bg="dark" variant="dark" fixed=""  >
                    <Container>
                        <Navbar.Brand href="#home">TAŞ KAĞIT MAKAS</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Ana Sayfa</Nav.Link>
                            <Nav.Link href="#features">Bilgisayara Karşı Oyna</Nav.Link>
                            <Nav.Link href="#pricing">Zamana Karşı Yarış</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        </>
    )
}

export default ColorSchemesExample;