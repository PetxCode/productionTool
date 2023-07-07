import Swal from "sweetalert2"
import React, { useContext } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { createTask } from '../utils/APIs'
import { v4 as uuidv4 } from "uuid"
import { contextState } from '../global/GlobalState'

const InputScreen = () => {

    const { globalState, setGlobalState } = useContext(contextState)

    const onToggle = () => {
        setGlobalState!(false)
    }

    const model = yup.object({
        task: yup.string().required(),
        priority: yup.string().required(),
    })

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset
    } = useForm({
        resolver: yupResolver(model)
    })

    const handleMySubmission = handleSubmit((res) => {

        createTask({
            id: uuidv4(),
            task: res.task,
            priority: res.priority,
            completed: false
        })

        Swal.fire({
            title: 'Are you sure?',
            text: "Your Task has been create!",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'Yes,!'
        }).then(() => {
            reset()
            onToggle()
        })


    })

    return (
        <div>
            <Container>
                <Main
                    onSubmit={handleMySubmission}
                >
                    <Icons onClick={onToggle}

                    />
                    <Input
                        placeholder="Enter your Task"
                        {...register("task")}
                    />
                    <Error>{errors.task && "Please enter your Task"}</Error>
                    <Input
                        placeholder="Enter your Priority"
                        {...register("priority")}
                    />
                    <Error>{errors.priority && "Please enter your Priority"}</Error>

                    <Button
                        type="submit"
                    >Add Task</Button>
                </Main>
            </Container>
        </div>
    )
}

export default InputScreen

const Icons = styled(AiOutlineClose)`
font-size: 30px;

`

const Error = styled.div`
font-size: 10px;
color: red
`

const Input = styled.input`
outline: none;
border: 1px solid silver;
border-radius: 3px;
height: 50px;
width: 300px;
padding-left: 10px;
margin-top: 10px;
`

const Button = styled.button`
padding: 10px 18px;
background-color: black;
border-radius: 3px;
color: white;
cursor: pointer;
margin-top: 30px;
outline: none;

`

const Main = styled.form`
width: 90%;
align-items: center;
display:flex;
flex-direction: column;
padding-top: 50px 
`

const Container = styled.div`
width: 100%;
display:flex;
justify-content: center;
`

