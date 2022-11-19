import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Anasayfa from "./components/Anasayfa";
import Oyna from "./components/Oyna"


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path='/' element={<Anasayfa />} />
            <Route path='/Oyna' element={<Oyna />} />
        </Routes>
    </div>
  );
}
export default App;
