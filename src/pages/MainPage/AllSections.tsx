import React, { useState, useEffect } from 'react'
import { styled } from 'styled-components'
import { BsFillArrowRightSquareFill } from "react-icons/bs"
import { useSelector, useDispatch } from "react-redux"
import { changeToggleFalse, changeToggleTrue } from '../../global/AuthGlobal'
import CardScreen from '../../components/common/CardScreen'
import { readDoneTask, readTask } from '../../utils/APIs'

interface iData {
    title?: string;
    numb?: number;
}

const CardProps: React.FC<iData> = ({ title, numb }) => {
    return <Card>
        <Title f="r" >{title}</Title>
        <Title >You have </Title>
        <Numb>{numb}</Numb>
        <Title >Task Left</Title>
    </Card>
}

const AllSections = () => {

    // const toggle = useSelector((state: any) => state.toggle)
    // const dispatch = useDispatch()


    const [state, setState] = useState<any>([])
    const [stateI, setStateI] = useState<any>([])

    useEffect(() => {
        readTask().then((res: any) => {
            console.log(res)
            return setState(res)
        })
        readDoneTask().then((res: any) => {
            return setStateI(res)
        })
    }, [])


    return (

        <Container>
            <Main>
                <Top>
                    <CardProps
                        title="Tasks"
                        numb={state.length}
                    />
                    <CardProps title="in progress"
                        numb={stateI.length} />
                    <CardProps title="Done"
                        numb={state.length} />
                </Top>
                <Bottom>
                    <Left>
                        <CardScreen
                            title="Todo Task"
                            data={state}
                            icon
                        />
                        <CardScreen
                            title="In progress"
                            data={stateI}

                        />
                        <CardScreen
                            title="Done"
                        // data={state}

                        />
                    </Left>
                    <Right>Right</Right>
                </Bottom>
            </Main>
        </Container>

    )


}

export default AllSections

const Right = styled.div`
width: 30%;
background-color: red
`

const Left = styled.div`
width: 70%;
display:flex;
border :1px solid silver ;
border-radius: 5px;
justify-content: center
`

const Bottom = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-top: 30px
`

const Numb = styled.div`
font-size: 60px;
font-weight: 700;
`
const Title = styled.div<{ f?: string }>`
font-size: ${({ f }) => f ? "22px" : "20px"};
font-weight: ${({ f }) => f ? "600" : "300"};
text-transform: ${({ f }) => f ? "uppercase" : "normal"};

`


const Card = styled.div`
width: 230px;
height: 180px;
border-radius: 5px;
background-color: purple;
color: white;
margin: 0 20px;
display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-size: 20px
`

const Top = styled.div`
width: 90%;
height: 200px;
background-color: #f8cdf8 ;
display:flex;
align-items: center;
justify-content: center
`


const Main = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Container = styled.div`
width: 100%;
justify-content: center;
display: flex
`


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
