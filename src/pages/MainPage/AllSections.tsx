import React from 'react'
import { styled } from 'styled-components'
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { changeToggleFalse, changeToggleTrue } from '../../global/AuthGlobal'


const AllSections = () => {

    const toggle = useSelector((state: any) => state.toggle)
    const dispatch = useDispatch()

    // const [toggle, setToggle] = React.useState<boolean>(false)

    // const onToggle = () => {
    //     setToggle(!toggle)
    // }

    return (
        <div>AllSections

            {
                toggle ? <Button
                    tt={toggle ? "k" : ""}
                    onClick={() => {
                        dispatch(changeToggleFalse())
                    }} /> :

                    <Button
                        tt={toggle ? "k" : ""}
                        onClick={() => {
                            dispatch(changeToggleTrue())
                        }} />
            }
        </div>
    )
}

export default AllSections

const Button = styled(BsFillArrowRightSquareFill) < { tt?: string }>`

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
