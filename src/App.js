import './App.css';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from "./pages/about/index";
function App() {
    const nameObject = {"name": "Prasoon Patidar", "position":"Researcher @CMU"}
  return (
    <div className="App">
        <Header nameObject={nameObject}/>
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<About/>}/>
                <Route path='/research' element={<About/>}/>
                <Route path='/projects'  element={<About/>}/>
                <Route path='/teaching'  element={<About/>}/>
                <Route path='/honors'  element={<About/>}/>
            </Routes>
        </Router>
        <Footer name={nameObject["name"]}/>
    </div>
  );
}

export default App;
