import React from 'react'
import { styled } from 'styled-components'
import { AiFillDatabase } from "react-icons/ai"
import { BiTask, } from "react-icons/bi"
import { LiaHourglassStartSolid } from "react-icons/lia"
import { MdIncompleteCircle } from "react-icons/md"
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Sider = () => {

    // const [toggle, setToggle] = React.useState<boolean>(false)
    // const onToggle = () => {
    //     setToggle(!toggle)
    // }

    const toggle = useSelector((state: any) => state.toggle)

    return (
        <div>
            <Contain w={toggle ? "k" : ""}>
                <Button tt={toggle ? "k" : ""}
                // onClick={onToggle}
                />
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
                </Main>
            </Contain>
        </div>
    )
}

export default Sider

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
transform: ${({ tt }) => tt ? "rotate(180deg)" : "rotate(0deg)"}
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

const Span = styled(Link)`
/* width: 82%; */

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
`;

const Contain = styled.div<{ w?: string }>`
width: ${({ w }) => w ? "260px" : "80px"};
height: 100vh;
background-color: #710271;
color: white;
position: relative
`