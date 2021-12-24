import { FC, useContext } from "react"
import { Navbar, Container, Nav } from "react-bootstrap"
import { UserContext } from 'src/provider/UserProvider'
import Link from 'next/link'

const Header: FC = () => {
  const user = useContext(UserContext)

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href='/' passHref>
          <Navbar.Brand>Consult FP App</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            { user &&
              <Link href='/home' passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
            }
            { !user &&
              <>
                <Link href='/sign_up' passHref>
                  <Nav.Link>Sign up</Nav.Link>
                </Link>
                <Link href='/sign_in' passHref>
                  <Nav.Link>Sign in</Nav.Link>
                </Link>
              </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header