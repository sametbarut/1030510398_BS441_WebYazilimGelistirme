import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (

        <>
            <div style={{
                height:'110vh',
                marginTop:'-70px',
                fontSize:'50px',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundImage: `url("https://media2.giphy.com/media/3ohzdGnD5vAud1NCZW/giphy.gif?cid=ecf05e47knirqqsevukm6tbvefndeuknbus7ppuofe9g047f&rid=giphy.gif&ct=g")`
            }}>
                Hello World
            </div>
            <div  class="position-absolute top-0 start-50 translate-middle-x">
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">TAŞ KAĞIT MAKAS</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Ana Sayfa</Nav.Link>
                            <Nav.Link href="#coop">Bilgisayara Karşı Oyna</Nav.Link>
                            <Nav.Link href="#time">Zamana Karşı Yarış</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
            </div>

        </>
    )
}



export default ColorSchemesExample;