import React, { useEffect } from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


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
                    <NavBtnLink to="/registration">Login / Registration</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;