import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import "./styles/main.css"
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectViews from "./pages/ProjectViews";
function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/project/:id" element={<ProjectViews/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                </Routes>

                <Footer />
        
            </Router>
        </div>
    );
}

export default App;
