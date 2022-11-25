import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Oyna from "./components/Oyna"
import Altbilgi from "./components/Altbilgi";
import React from "react";
import Navbar from "./components/Navbar";


function App() {

  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route path='/' element={<Anasayfa />} />
            <Route path='/Oyna' element={<Oyna />} />
        </Routes>
        <Altbilgi/>
    </div>
  );
}
export default App;
