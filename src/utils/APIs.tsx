import axios from "axios";

const URL: string = "http://localhost:7660/data"
const MainURL: string = "http://localhost:7660/done"

export const createTask = async (data: any) => {
    try {
        await axios.post(URL, data).then(res => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const readTask = async () => {
    try {
        return await axios.get(URL).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateTask = async (id: string) => {
    try {
        return await axios.patch(`${URL}/${id}`, { completed: true }).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTask = async (id: string) => {
    try {
        return await axios.delete(`${URL}/${id}`).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}

// DONE PART


export const createDoneTask = async (data: any) => {
    try {
        await axios.post(MainURL, data).then(res => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}


export const readDoneTask = async () => {
    try {
        return await axios.get(MainURL).then((res: any) => {
            return res.data
        })
    } catch (error) {
        console.log(error)
    }
}
