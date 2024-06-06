import {createContext} from "react"

const userContext = createContext({
    userInfo: {
        name: "Dummy Data",
        email: "dummy@gmail.com"
    }
})
export default userContext;