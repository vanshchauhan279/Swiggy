import {useEffect, useState} from "react";

const useAuth = ()=>{
  
    const [isLoggedIn,setIsLoggedIn]= useState(false);

    // useEffect(()=>{    
       
    // },[])
    // {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>LogOut</button>): (<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}

   
    return isLoggedIn;
     
}
export default useAuth;