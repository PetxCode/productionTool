import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Header = () => {
    return (
        <div>
            <Container>
                <Main>
                    <Logo>Logo</Logo>

                    <NavBox>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }} >
                            <Nav>Home</Nav>
                        </Link>
                    </NavBox>
                    <Link to="/input"
                        style={{ textDecoration: "none", color: "black" }}
                    ><Button>Add Task</Button></Link>

                </Main>
            </Container>
        </div>
    )
}

export default Header

const Button = styled.div`
padding: 10px 18px;
background-color: white;
border-radius: 3px;
color: black;
cursor: pointer;

`

const Nav = styled.div``

const NavBox = styled.div``

const Logo = styled.div``

const Main = styled.div`
width: 90%;
height: 90px;
align-items: center;;
justify-content: space-between;
display:flex
`

const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
background-color: black;
color: white
`