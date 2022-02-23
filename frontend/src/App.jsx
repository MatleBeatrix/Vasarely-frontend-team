import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import MyCollection from './components/pages/MyCollection';
import Registration from './components/pages/Registration';
import ErrorPage from './components/pages/ErrorPage';
import { useState,useEffect } from "react";

function App() {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const [authUsername, setAuthUsername] = useState('');
  // const [authPassword, setAuthPassword] = useState('');
  // const [todo, setTodo] = useState('');
  const [page, setPage] = useState("reg");

  // const login = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:4000/api/login', {}, {
  //       headers: {
  //         'Authorization': authUsername + '&&&' + authPassword
  //       }
  //     })
  //     /*
  //     localStorage.setItem("user", authUsername);
  //     localStorage.setItem("pw", authPassword);
  //     */
  //     localStorage.setItem("sessionID", response.data);
  //     setPage("log");
  //     // console.log(response.data);
  //   }
  //   catch (e) {
  //     alert("wrong username/password");
  //   }
  // }

  const [update, setUpdate] = useState('')

  useEffect(() => {
    if (localStorage.getItem("sessionID")) {
      setPage("log");
    }
  }, [update])

  return (
    <div className="App">

      <Router>
        <Navbar page={page}/>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/mycollection" element={<MyCollection />} />
          <Route path="/registration" element={<Registration childToParentUpdate={update => setUpdate(update)}/>} />
          <Route path="/*" element={<ErrorPage />} />

        </Routes>
      </Router>      
    </div>
  );
}

export default App;
