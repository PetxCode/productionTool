import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import CardScreen from '../components/common/CardScreen'
import { readDoneTask, readTask } from '../utils/APIs'
import InputScreen from './InputScreen'

const HomeScreen = () => {

    const [state, setState] = useState<any>([])
    const [stateI, setStateI] = useState<any>([])

    useEffect(() => {
        readTask().then((res: any) => {
            return setState(res)
        })
        readDoneTask().then((res: any) => {
            return setStateI(res)
        })
    }, [])



    return (
        <Div style={{ position: "relative" }} >
            <Container>
                <CardScreen
                    title="Todo Task"
                    data={state}
                    icon
                // input
                />
                <CardScreen
                    title="In Progress"
                    data={stateI}
                />
            </Container>

            <Holder>
                <InputScreen />
            </Holder>
        </Div>
    )
}

export default HomeScreen


const Holder = styled.div`
position: absolute;
z-index: 10;
bottom: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center
`

const Div = styled.div`
display: flex;
justify-content:center;
margin-top: 40px;
width: 100%;
min-height:calc(100vh - 90vh)

`

const Container = styled.div`
display: flex;
justify-content:center;
margin-top: 40px;
width: 100%;
min-height:calc(100vh - 90vh)

`