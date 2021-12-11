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
                    <NavLink to='/' >
                        About
                    </NavLink>
                    <NavLink to='/research' >
                        Research
                    </NavLink>
                    <NavLink to='/projects' >
                        Projects
                    </NavLink>
                    <NavLink to='/teaching' >
                        Teaching
                    </NavLink>
                    <NavLink to='/honors' >
                        Honors
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}
export default Navbar;