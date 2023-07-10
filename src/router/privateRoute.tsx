import React, { PropsWithChildren, } from 'react'
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const PrivateRoute: React.FC<PropsWithChildren> = ({ children }) => {
    const user = useSelector((state: any) => state.user)
    return (
        <>
            {
                user ? <div>
                    {children}
                </div > : <Navigate to="/sign-in" />
            }
        </>
    )
}

export default PrivateRoute