import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home/home";
import About from "./components/pages/About/about";
import Detail from "./components/pages/Detail/detail";

import './App.css'

 export default function App() {

  return (
    <div>
       <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/detail" element={<Detail />} />
            </Routes>
        </Router>
    </div>
  )
}


