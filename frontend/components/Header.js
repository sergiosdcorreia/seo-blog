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
                {!isAuth && (
                    <>
                        <Link href="/signin">
                            <a>Signin</a>
                        </Link>        
                        <Link href="/signup">
                            <a>Signup</a>
                        </Link>
                    </>
                )}

                {isAuth() && isAuth().role === 0 && (
                    <a href="/user">{`${isAuth().name}'s Dashboard`}</a>
                )}

                {isAuth() && isAuth().role === 1 && (
                    <a href="/admin">{`${isAuth().name}'s Dashboard`}</a>
                )}

                {/* Link needs fixing */}
                {isAuth() && (
                    <button onClick={() => signout(() => Router.replace(`/signin`))}>Signout</button>
                )}

                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown> */}
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Header;