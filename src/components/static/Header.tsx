import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logOut } from '../../global/AuthGlobal'
import { useState, useEffect } from "react"
import { readOne } from '../../utils/AuthAPI'


const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)

    const [userData, setUserData] = useState<any>({})



    useEffect(() => {
        readOne(user).then((res) => {
            setUserData(res)
        })
    }, [])
    return (
        <div>
            <Container>
                <Main>
                    <Logo>Logo</Logo>

                    <NavBox>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }} >
                            <Nav>
                                {userData?.userName}
                            </Nav>
                        </Link>
                    </NavBox>

                    <Button
                        onClick={() => {
                            dispatch(logOut())
                        }}
                    >Log Out</Button>

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