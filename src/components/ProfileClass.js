import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userInfo: {
                name: "Dummy name",
                type: "Dummy location"
            }
        };
    //  console.log("Constructor"+this.props.name);
    }
    
componentDidMount(){
    // const data=await fetch("https://api.github.com/users/vanshchauhan279");
    // const json= await data.json();
    // console.log(json);
    // this.setState({
    //     userInfo: json,
    //   })     
//   this.timer= setInterval(()=>{
//     console.log("this is render");
//    },1000);
console.log("componentDidMount render")
    }

    componentWillUnmount(){
       clearInterval(this.timer);
    }
    
    render(){
        // const {count }= this.state;
        // console.log("render"+this.props.name);
        return(
            <>
            <h1>hwloko</h1>
            <h1>Name: {this.state.userInfo.name}  </h1>
            <h1>Location: {this.state.userInfo.type} </h1>
            </>
        )
    }
}
export default ProfileClass