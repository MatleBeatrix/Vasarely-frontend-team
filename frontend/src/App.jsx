import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Gallery from './components/pages/gallery';
import MyCollection from './components/pages/myCollection';
import Registration from './components/pages/registration';
import ErrorPage from './components/pages/ErrorPage';

function App() {
  
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mycollection" element={<MyCollection />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      </Router>      
    </div>
  );
}

export default App;
