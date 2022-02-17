import React from "react";
import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
			Harvard Art Museums
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
                <NavLink 
                  to="/login" 
                  activestyle={{ color: 'black' }}
                >
                    Login
                </NavLink>
                
                <NavBtn>
                    <NavBtnLink to="/registration">Registration</NavBtnLink>                
                </NavBtn>
            </NavMenu> 
           </Nav> 
        </>
    );
};
export default Navbar;