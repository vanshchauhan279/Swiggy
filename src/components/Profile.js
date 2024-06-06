import { useEffect } from "react"
const Profile =(props)=>{
    useEffect(()=>{
        const timer=setInterval(()=>{
            console.log("useEffect")
        },1000);
        return ()=>{
            clearInterval(timer)
        }
    },[])
    return(
        <>
        <h1>this is my {props.name}</h1>
        {/* <h2>insta</h2>
        <h2>Linked In</h2> */}
        </>
    )
}
export default Profile