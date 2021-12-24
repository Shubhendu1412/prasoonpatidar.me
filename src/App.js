import './App.css';
import Header from "./components/header/header";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about/index";
import Research from "./pages/research";
import Projects from "./pages/projects";
import Teaching from "./pages/teaching";
import Honors from "./pages/honors";
import Leadership from "./pages/leadership";
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
                <Route path='/projects'  element={<Projects/>}/>
                <Route path='/teaching'  element={<Teaching/>}/>
                <Route path='/leadership'  element={<Leadership/>}/>
                <Route path='/honors'  element={<Honors/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
