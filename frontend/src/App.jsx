//import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Gallery from './components/pages/Gallery';
import MyCollection from './components/pages/MyCollection';
import Registration from './components/pages/Registration';
import ErrorPage from './components/pages/ErrorPage';
import { useState,useEffect } from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./components/Navbar/NavbarElements";

function App() {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const [authUsername, setAuthUsername] = useState('');
  // const [authPassword, setAuthPassword] = useState('');
  // const [todo, setTodo] = useState('');
  const [page, setPage] = useState("reg");
  const [update, setUpdate] = useState('');

  const Navbar = ({ page }) => {

    useEffect(() => {
      
    }, [page])
    
    return (
        <>
           <Nav>
            <NavLogo to="/">
			Harvard Art Museums
            {<img src='https://harvardartmuseums.org/assets/icons/fb-og-image-400x400.png' alt="Logo"></img>}
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/" 
                  activestyle={{ color:'black' }}
                >
                    Home 
                </NavLink>
                <NavLink 
                  to="/gallery" 
                  activestyle={{ color: 'black' }}
                >
                    Gallery
                </NavLink>
                {page === 'log' && 
                    <NavLink 
                    to="/mycollection" 
                    activestyle={{ color: 'black' }}
                  >
                      My Collection
                  </NavLink>
                }
                <NavBtn>
                    {page === 'log' &&
                        <NavBtnLink onClick={() => { localStorage.clear(); setPage('reg')}} to="/">Log out</NavBtnLink>                
                    
                    }
                    {page !== 'log' &&
                        <NavBtnLink to="/registration">Log in / Registration</NavBtnLink>                
                    }
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};

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
