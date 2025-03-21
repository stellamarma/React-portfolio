import "../src/css/App.css";
import Home from './pages/Home'
import {Router,Route, Routes} from "react-router-dom";
import Favorites from './pages/Favoirites';
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from './components/NavBar';

function App() {


  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App
