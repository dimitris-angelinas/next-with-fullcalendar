import React, {useContext} from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'
import { GlobalContext } from '../../context/globalcontext'
import { useRouter } from 'next/router'

const Header = ({}) => {

    const router = useRouter()

    const { user, setUser } = useContext(GlobalContext);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Booking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {/*<Nav.Link href="#home">Home</Nav.Link>*/}
                            {/*<Nav.Link href="#link">Link</Nav.Link>*/}
                            {user?.uuid &&
                            <NavDropdown title="User" id="basic-nav-dropdown">
                                <NavDropdown.Item
                                    onClick={()=>{
                                        setUser({})
                                        router.push('/user/login')
                                    }}
                                >
                                    Logout
                                </NavDropdown.Item>
                                {/*<NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>*/}
                                {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>*/}
                                {/*<NavDropdown.Divider />*/}
                                {/*<NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>*/}
                            </NavDropdown>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;
