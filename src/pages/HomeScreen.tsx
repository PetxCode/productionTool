import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import CardScreen from '../components/common/CardScreen'
import { readDoneTask, readTask } from '../utils/APIs'
import InputScreen from './InputScreen'
import { contextState } from '../global/GlobalState'

const HomeScreen = () => {


    const { globalState } = useContext(contextState)
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
                />
                <CardScreen
                    title="In Progress"
                    data={stateI}
                />
            </Container>

            <div>
                {
                    globalState && <Holder>
                        <InputScreen />
                    </Holder>
                }
            </div>

        </Div>
    )
}

export default HomeScreen

const Holder = styled.div`
position: absolute;
left:0;
top:0;
width: 100%;
height: calc(100vh - 90px);
background: rgba( 8, 8, 8, 0.55 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 4px );
-webkit-backdrop-filter: blur( 4px );
display: flex;
justify-content: center;
align-items:center
`

const Div = styled.div`
display: flex;
justify-content:center;
padding-top: 70px;

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