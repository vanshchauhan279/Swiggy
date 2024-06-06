import {useContext} from "react"
import userContext from "../utils/userContext"

export const Footer = ()=>{
    const {userInfo} = useContext(userContext);
    return(
        <div className="bg-slate-400 text-center p-6 m-3">
        <h2>This site is developed by <span>{userInfo.name}</span></h2>
        <h2>EMAIL : <span>{userInfo.email}</span></h2>
        </div>
    )
}
