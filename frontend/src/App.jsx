import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/home';
import Gallery from './components/pages/gallery';
import MyCollection from './components/pages/myCollection';
import Registration from './components/pages/registration';
import ErrorPage from './components/pages/ErrorPage';
import { useState,useEffect } from "react";
import axios from 'axios';



function App() {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  const [authUsername, setAuthUsername] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  // const [todo, setTodo] = useState('');
  const [page, setPage] = useState("reg");

  const login = async () => {
    try {
      const response = await axios.post('http://localhost:4000/api/login', {}, {
        headers: {
          'Authorization': authUsername + '&&&' + authPassword
        }
      })
      /*
      localStorage.setItem("user", authUsername);
      localStorage.setItem("pw", authPassword);
      */
      localStorage.setItem("sessionID", response.data);
      setPage("log");
      // console.log(response.data);
    }
    catch (e) {
      alert("wrong username/password");
    }
  }

  useEffect(() => {
    if (localStorage.getItem("sessionID")) {
      setPage("log");
    }
  }, [])

  return (
    <div className="App">

      <Router>
        <Navbar page={page}/>
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
