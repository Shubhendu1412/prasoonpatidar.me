import React from "react";
import {NavLink as Link} from "react-router-dom";
import './styles.css'
import styled from "styled-components";

const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
function Navbar () {
    return (
        <>
            <nav className="nav">
                <div className="nav-menu">
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
                    <NavLink to='/leadership' >
                        Leadership
                    </NavLink>
                    <NavLink to='/honors' >
                        Honors
                    </NavLink>
                    <NavLink to='/blog' >
                        Blog
                    </NavLink>
                </div>
            </nav>
        </>
    )
}
export default Navbar;