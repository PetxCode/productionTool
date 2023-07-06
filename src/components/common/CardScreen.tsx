import React from 'react'
import styled from 'styled-components'
import { createDoneTask, deleteTask, updateTask } from '../../utils/APIs';
import { AiFillFolderAdd } from "react-icons/ai"
import InputScreen from '../../pages/InputScreen';
interface iData {
    title?: string;
    icon?: boolean;
    input?: boolean;
    data?: []
}

const CardScreen: React.FC<iData> = ({ title, data, icon, input }) => {
    return (
        <Container>
            <Main>
                <Title>
                    <span>{title}</span>
                    {
                        icon ? <Icon /> : null
                    }
                </Title>

                {
                    data?.map((props: any) => (
                        <Card key={props._id}
                            bg={
                                props.priority === "Urgent" ? "red" :
                                    props.priority === "High" ? "pink" :
                                        props.priority === "Low" ? "lightblue" : "yellow"
                            }
                        >
                            <Task bg={props.completed ? "w" : ""}
                            >{props?.task}</Task>

                            <Move
                                onClick={() => {
                                    // updateTask(props.id)
                                    createDoneTask(props)
                                    deleteTask(props._id)

                                    window.location.reload()
                                }}
                            >Move to Progress</Move>
                        </Card>
                    ))
                }
            </Main>

            <Holder>
                {input && <InputScreen />}
            </Holder>
        </Container>
    )
}

export default CardScreen

const Holder = styled.div`
position: absolute;
z-index: 10;
top: 0;
left: 0;
`

const Container = styled.div`
position: relative
`

const Icon = styled(AiFillFolderAdd)`
margin-right: 10px
`

const Move = styled.div`
color: white;
background-color: black;
font-size: 12px;
font-weight: bold;
border-radius: 3px;
padding: 10px 15px;
margin-top: 15px;
width: 100px;
display:flex;
justify-content: flex;
align-items: center;
cursor: pointer
`

const Task = styled.div<{ bg?: string }>`
text-decoration: ${({ bg }) => bg ? "line-through" : "none"};
`

const Card = styled.div<{ bg?: string }>`
margin: 3px 0;
background-color: ${({ bg }) => bg};
padding: 10px
`

const Title = styled.div`
background-color: lightgrey;
text-align: center;
padding: 10px 0;
text-transform: uppercase;
font-weight: bold;

display:flex;
align-items: center;
justify-content: space-between;

span{
    margin-left: 10px;
}
`

const Main = styled.div`
width: 250px;
border: 1px solid silver;
border-radius:3PX; 
`