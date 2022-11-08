import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar"
import {Container, Nav, NavDropdown} from "react-bootstrap";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">

        <Navbar/>
        <Background/>

    </div>
  );
}

export default App;
