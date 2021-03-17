import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl'
import Navbar from 'react-bootstrap/Navbar'

const NavBar=(props)=>{
    return (
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img
                    alt=""
                    src="https://pngimg.com/uploads/pokeball/pokeball_PNG21.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Pokemoni za sirotinju 
        </Navbar.Brand>
        <Nav className="mr-auto">
            
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form>
  </Navbar>
        
    )
}

export default NavBar;