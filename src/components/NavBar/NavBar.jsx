import './NavBar.scss';
import React from 'react';
import { useNavigate } from 'react-router-dom'
import { Nav, Navbar, Button, Form, FormControl, Container }  from 'react-bootstrap';


const NavBar = (props) => {
  const navigate = useNavigate()

  const handleSubmitSearch = evt => {
    evt.preventDefault()
    props.handleSubmitSearch()
    navigate('/recordSearch')
  }

  return (
    <main>
      {props.user ?
        <Navbar sticky="top" className='navbar' collapseOnSelect expand="xl" >
        <Container>
        <Navbar.Brand href="/">
          <img alt="" src="./vinyls-logo.png"
          width="70%"
          className="d-inline-block align-top"/>
          {' '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <i className="fas fa-record-vinyl"></i> 
              {' '}My Record Collection</Nav.Link>
            <Nav.Link href="/profiles">
              <i className="fas fa-user"></i>
              {' '}Profiles</Nav.Link>
            <Nav.Link href="/changePassword">
              <i className="fas fa-unlock"></i>
              {' '}Change Password</Nav.Link>
            <Nav.Link href="" onClick={props.handleLogout}>
              <i className="fas fa-right-from-bracket"></i>
              {' '}Log Out</Nav.Link>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmitSearch}>
            <FormControl 
              onChange={props.handleSetSearch} 
              value={props.search.query} 
              name="query" 
              type="search"
              placeholder="Search..."
              className="me-2"
              aria-label="Search"
            />
            <Button onClick={handleSubmitSearch} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      :
      <Navbar className='navbar' collapseOnSelect expand="xl" bg="lavender" >
        <Container>
        <Navbar.Brand href="/">
          <img alt="" src="./vinyls-logo.png"
          width="50%"
          className="d-inline-block align-top"
        />{' '}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login">
            <i className="fas fa-key"></i>
            {' '}Log In</Nav.Link>
            <Nav.Link href="/signup">
            <i className="fas fa-user-plus"></i>
            {' '}Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      }
    </main>
  )
}

export default NavBar 

