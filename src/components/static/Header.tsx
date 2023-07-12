import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logOut } from '../../global/AuthGlobal'
import { useState, useEffect } from "react"
import { readOne } from '../../utils/AuthAPI'

interface iData {
    readID?: string | null
}
interface iDataII {
    readID?: {} | null
}

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)

    const [userData, setUserData] = useState<any>({})

    const [readID, setReadID] = useState(JSON.parse(localStorage.getItem("getUserDataID") || ""))

    // getUserDataID

    useEffect(() => {
        readOne(readID).then((res: any) => {
            setUserData(res)

            window.localStorage.setItem("getUserData", JSON.stringify(res))
        })


    }, [])

    // let readData = JSON.parse(window?.localStorage?.getItem("reading"))

    return (
        <div>
            <Container>
                <Main>
                    <Logo>Log</Logo>

                    <NavBox>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }} >
                            <Nav>
                                {/* {userData?.userName} */}
                            </Nav>
                        </Link>
                    </NavBox>

                    <NavBox>
                        <Link to="/" style={{ textDecoration: "none", color: "white" }} >
                            <Nav>
                                {/* {readData} */}
                            </Nav>
                        </Link>
                    </NavBox>

                    <Button
                        onClick={() => {
                            dispatch(logOut())

                            JSON.parse(localStorage?.removeItem("userDataInfo"))

                            JSON.parse(localStorage?.removeItem("getUserDataID"))



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