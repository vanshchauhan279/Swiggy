import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import React from "react";

const About = ()=>{
    return (
        <>
        <h1>About Us</h1>
        <p>This is a about us a page</p>
        {/* <Outlet/>
        <Link to="/about/profile"> <h1>For more </h1></Link>  */}
        <Profile name={"functional props"}/>
        <ProfileClass name={"class props"} xyz="sssskm"/>
        </>
    )
}


// class About extends React.Component{
//     constructor(props){
//         super(props);

//     console.log("parent Constructor");
//     }

//     componentDidMount(){
//         console.log("parent ComponentDidMount")
//     }
//     render(){
//         console.log("Parent render")
//         return(
//             <>
//                      <h1>About Us</h1>
//                      <p>This is a about us a page</p>
//                    {/* <Outlet/>
//             //         <Link to="/about/profile"> <h1>For more </h1></Link>  */}
//                      {/* <Profile name={"functional props"}/> */}
//                      <ProfileClass name={"class1 props"} />
//                      {/* <ProfileClass name={"class2 props"} /> */}
//                     </>
//         )
//     }
// }
export default About;