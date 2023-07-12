import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { AiFillDatabase } from "react-icons/ai"
import { BiTask, BiLogIn } from "react-icons/bi"
import { LiaHourglassStartSolid } from "react-icons/lia"
import { MdIncompleteCircle } from "react-icons/md"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { changeToggleFalse, changeToggleTrue, logOut } from '../../global/AuthGlobal'
import { readOne } from '../../utils/AuthAPI'

const Sider = () => {


    // const [toggle, setToggle] = React.useState<boolean>(false)
    // const onToggle = () => {
    //     setToggle(!toggle)
    // }
    const dispatch = useDispatch()
    const toggle = useSelector((state: any) => state.toggle)
    const user = useSelector((state: any) => state.user)

    const userID: any = JSON.parse(window.localStorage.getItem("getUserDataID"));
    const [state, setState] = useState<any>({})

    console.log(userID)
    useEffect(() => {
        readOne(userID).then((res) => {

            (window.localStorage.setItem("userDataInfo", JSON.stringify(res)))

            return setState(JSON.parse(window.localStorage.getItem("userDataInfo")))


        })
    }, [])

    return (
        <div>
            <Contain w={toggle ? "k" : ""}>
                {toggle ? <Button tt={toggle ? "k" : ""}
                    onClick={() => {
                        dispatch(changeToggleFalse())
                    }}
                /> : <Button tt={toggle ? "k" : ""}
                    onClick={() => {
                        dispatch(changeToggleTrue())
                    }}
                />}
                <Main>
                    <Logo>
                        <Box />
                        {toggle && <div>CodeLab</div>}
                    </Logo>

                    <Nav w={toggle ? "k" : ""}>

                        <Span to="/main/">
                            <Icon4 />
                            {toggle && <div>View All</div>}
                        </Span>

                        <Span to="/main/task">
                            <Icon2 />{toggle && <div>View Task</div>}
                        </Span>

                        <Span to="/main/progress">
                            <Icon1 />{toggle && <div>View Inprogress</div>}
                        </Span>

                        <Span to="/main/done">
                            <Icon3 />{toggle && <div>View Done</div>}</Span>
                    </Nav>

                    <Space />

                    <Nav w={toggle ? "k" : ""} >
                        <SpanII>
                            {toggle ? <Avatar w={toggle ? "k" : ""}>{state?.avatar}</Avatar> : <Avatar w={toggle ? "k" : ""}>{state?.avatar}</Avatar>}


                            {toggle && <Name>{state?.userName}</Name>}

                        </SpanII>
                    </Nav>

                    <Nav w={toggle ? "k" : ""}
                        onClick={() => {
                            dispatch(logOut())
                        }}
                    >
                        <SpanII>
                            <LogOutIcons />

                            {toggle && <Name>Log Out</Name>}

                        </SpanII>
                    </Nav>
                </Main>
            </Contain>
        </div>
    )
}

export default Sider

const Butt = styled.div`
padding: 8px 15px;
background-color: #872787;
color: black;
display: flex;
align-items: center;
width: 50%;
justify-content: center;
margin-top: 20px;
`

const Name = styled.div`
text-transform: uppercase;
flex: 0.6
`

const Avatar = styled.div<{ w?: string }>`
width: ${({ w }) => w ? "50px" : "100%"};
height: ${({ w }) => w ? "50px" : "100%"};
border-radius: ${({ w }) => w ? "50%" : ""};
border: ${({ w }) => w ? "1px solid black" : "0px"};
margin-right: 5px;
object-fit: cover;
display:flex;
justify-content: center;
align-items: center;
font-size: 26px;
font-weight: 700
`
const ProfileHolder = styled.div`
display: flex;
/* align-items: center; */
/* width: 100%; */
flex-direction: column;

`

const Space = styled.div`
flex: 1
`
const LogOutIcons = styled(BiLogIn)`
margin-right: 10px;
font-size: 20px;
`
const Button = styled(BsFillArrowRightSquareFill) < { tt?: string }>`
position: absolute;
color: #912c91;
font-size: 30px;
top: 40px;
right: -15px;
cursor: pointer;
background-color: white;
overflow: hidden;
border-radius: 2px;
transform: ${({ tt }) => tt ? "rotate(180deg)" : "rotate(0deg)"};
transition: all 360ms;
/* transform: rotate(180deg) */
`


const Icon4 = styled(AiFillDatabase)`
margin-right: 10px;
font-size: 20px;
`
const Icon3 = styled(BiTask)`margin-right: 10px;
font-size: 20px;`
const Icon2 = styled(MdIncompleteCircle)`margin-right: 10px;
font-size: 20px;`
const Icon1 = styled(LiaHourglassStartSolid)`margin-right: 10px;
font-size: 20px;`

const SpanII = styled.div`
/* width: 82%; */
overflow: hidden;
transition: all 360ms;
margin: 10px 0;
background-color: #8c2e8c;
padding: 10px 0px 10px 10px; 
color: white;
text-decoration: none;
border-radius: 3px;
 cursor: pointer;
display:flex;
align-items: center
`;

const Span = styled(Link)`
/* width: 82%; */
overflow: hidden;
transition: all 360ms;
margin: 10px 0;
background-color: #8c2e8c;
padding: 10px 0px 10px 10px; 
color: white;
text-decoration: none;
border-radius: 3px;
 cursor: pointer;
display:flex;
align-items: center
`;

const Nav = styled.div < { w?: string }>`
width: ${({ w }) => w ? "230px" : "50px"};

transition: all 360ms;
`;

const Box = styled.div`
width: 50px;
height: 50px;
border-radius: 5px;
background-color: white;
margin-right: 10px
`;

const Logo = styled.div`
display:flex;
align-items: center;
/* justify-content: center; */
width :260px;
margin-bottom: 50px
`;

const Main = styled.div`
padding-top: 30px;
width: 260px;
padding-left: 20px;
padding-right: 20px;
display:flex;
flex-direction: column;
height: 90vh;
`;

const Contain = styled.div<{ w?: string }>`
width: ${({ w }) => w ? "260px" : "80px"};
height: 100vh;
background-color: #710271;
color: white;
position: relative;
transition: all 360ms;
`