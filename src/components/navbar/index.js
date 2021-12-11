import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu
} from './NavbarElements'

function Navbar () {
    return (
        <>
            <Nav>
                <Bars/>
                <NavMenu>
                    <NavLink to='/' activeStyle>
                        About
                    </NavLink>
                    <NavLink to='/research' activeStyle>
                        Research
                    </NavLink>
                    <NavLink to='/projects' activeStyle>
                        Projects
                    </NavLink>
                    <NavLink to='/teaching' activeStyle>
                        Teaching
                    </NavLink>
                    <NavLink to='/honors' activeStyle>
                        Honors
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar;