import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/common/Layout'
import InputScreen from '../pages/InputScreen'
import HomeScreen from '../pages/HomeScreen'
import Register from '../pages/auth/Register'
import SignIn from '../pages/auth/SignIn'
import PrivateRoute from "./privateRoute"
import MainLayout from '../components/common/MainLayout'
import AllSections from '../pages/MainPage/AllSections'
import ViewTask from '../pages/MainPage/ViewTask'
import ViewProgress from '../pages/MainPage/ViewProgress'
import DoneTask from '../pages/MainPage/DoneTask'


export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <PrivateRoute>
            <MainLayout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                element: <AllSections />
            },
            {
                path: "task",
                element: <ViewTask />
            },
            {
                path: "progress",
                element: <ViewProgress />
            },
            {
                path: "done",
                element: <DoneTask />
            },
        ]
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        path: "/main/",
        element:
            <HomeScreen />
        ,
        children: [
            {
                index: true,
                element: <AllSections />
            },
            {
                path: "task",
                element: <ViewTask />
            },
            {
                path: "progress",
                element: <ViewProgress />
            },
            {
                path: "done",
                element: <DoneTask />
            },
        ]
    }
])