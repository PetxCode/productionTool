import axios from "axios"


const url = "http://localhost:2233/api/v1/auth"
export const registerUser = async (data: any) => {
    try {
        return await axios.post(`${url}/register`, data).then((res) => {
            return res.data.data
        })
    } catch (err) {
        console.log(err)
    }
}
export const signInUser = async (data: any) => {
    try {
        return await axios.post(`${url}/sign-in`, data).then((res) => {
            return res.data.data
        })
    } catch (err) {
        console.log(err)
    }
}

export const readOne = async (id: string) => {
    try {
        return await axios.get(`${url}/${id}/user-info`,).then((res) => {
            return res.data.data
        })
    } catch (err) {
        console.log(err)
    }
}