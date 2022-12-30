import Container from 'react-bootstrap/Container';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom";

function ColorSchemesExample() {
    return (
        <>
            <div>
            </div>
            <div  class="navbar">
                <Navbar bg="dark" variant="dark">
                    <Link
                        to='/'
                        className='h2'
                    >
                        TAŞ KAĞIT MAKAS
                    </Link>{' '}
                </Navbar>
            </div>

        </>
    )
}
export default ColorSchemesExample;