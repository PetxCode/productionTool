import React from 'react'
import { Outlet } from 'react-router-dom'
import Sider from "../static/Sider"
import styled from 'styled-components'

const MainLayout = () => {
    return (
        <Container>
            <Sider />
            <Outlet />
        </Container>
    )
}

export default MainLayout

const Container = styled.div`
display:flex
`