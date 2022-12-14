import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Oyna from "./components/Oyna"
import React from "react";
import Navbar from "./components/Navbar";
import Notfound from "./components/Notfound";
import ZamanaKarsi from "./components/ZamanaKarsi";
import Footer from "./components/Footer";


function App() {

  return (
    <div className="App">
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <Routes>
            <Route path='/' element={<Anasayfa />} />
            <Route path='/Oyna' element={<Oyna />} />
            <Route path='ZamanaKarsi' element={<ZamanaKarsi/>} />
            <Route path='*' element={<Notfound />} />
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;
