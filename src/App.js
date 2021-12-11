import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about/index";
import Research from "./pages/research";
function App() {
    const nameObject = {"name": "Prasoon Patidar", "position":"Researcher @CMU"}
  return (
    <div className="App">
        <Header nameObject={nameObject}/>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<About/>}/>
                <Route path='/research' element={<Research/>}/>
                <Route path='/projects'  element={<About/>}/>
                <Route path='/teaching'  element={<About/>}/>
                <Route path='/honors'  element={<About/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
