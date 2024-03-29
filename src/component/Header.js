import React, {Component} from 'react'
import { Navbar,Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

export class Header extends Component{

    render(){
        return(
            <Navbar bg="light" expand="lg">
            	<Navbar.Toggle aria-controls="basic-navbar-nav" />
            	<Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
	            	<Nav>
		            	<NavLink className="d-inline p-2 bg-light text-white" to="/skills">Skill</NavLink>
		            	<NavLink className="d-inline p-2 bg-light text-white" to="/projects">Project</NavLink>
	            		<NavLink className="d-inline p-2 bg-light text-white" to="/" id="brand">Sendi Dian</NavLink>
	            		<NavLink className="d-inline p-2 bg-light text-white" to="/about-us">About</NavLink>
	            		<NavLink className="d-inline p-2 bg-light text-white" to="/contact-us">Contact</NavLink>
	            	</Nav>
            	</Navbar.Collapse>
            </Navbar>
        )  
    }
}

export default Header;