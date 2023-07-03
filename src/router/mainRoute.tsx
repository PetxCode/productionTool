import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/common/Layout'
import InputScreen from '../pages/InputScreen'
import HomeScreen from '../pages/HomeScreen'



export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomeScreen />
            },
            {
                path: '/input',
                element: <InputScreen />
            }
        ]
    }
])