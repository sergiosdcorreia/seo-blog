import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Link from 'next/link';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import { Router } from 'next/router';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
            <Link href="/">
                <a>{APP_NAME}</a>
            </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                {!isAuth && 
                <>
                    <Link href="/signin">
                        <a>Signin</a>
                    </Link>        
                    <Link href="/signup">
                        <a>Signup</a>
                    </Link>
                </>
                }
                
                {isAuth() && (
                    <a onClick={() => signout(() => Router.replace(`/signin`))}>Signout</a>
                )}

                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
                Dank memes
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;