

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Gallery from './components/pages/gallery';
import Login from './components/pages/login';
import Registration from './components/pages/registration';



function App() {
  
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />

        </Routes>
      </Router>

      {/* <Registration /> */}
      
    </div>
  );
}

export default App;
