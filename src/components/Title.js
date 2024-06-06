import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import useAuth  from "../utils/useAuth";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Title = ()=>(
    <img data-testid="logo" className="p-2 h-24 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS0qhlm0pFwyDcjgb4QIzyP9iPgdWx8WHRVQ&s" alt="logo" />
)

const Header= ()=>{ 
    const [isLoggedIn,setIsLoggedIn]= useState(false)
    const isOnline = useOnline();
    const {userInfo}= useContext(userContext)
    const cartItems = useSelector(store => store.cart.items)
    console.log(cartItems)

    return(       
        <div className="flex justify-between bg-pink-50 shadow-lg">
           <Title/>
           <div >
            <ul className="flex py-8                                                                                                                                                                 ml-32 ">
                <li className="px-2 mx-4 text-lg font-bold text-green-600 hover:text-red-800"> <Link to="/"> Home</Link> </li>
                <li className="px-2 mx-4 text-lg font-bold text-green-600  hover:text-red-800"> <Link to="/about"> About</Link> </li> 
                <li className="px-2 mx-4 text-lg font-bold text-green-600  hover:text-red-800"> <Link to="/contact">Contact</Link></li>
                <li className="px-2 mx-4 text-lg font-bold text-green-600  hover:text-red-800"> <Link to="/instaMart">InstaMart</Link></li>    
                <li className="px-2 mx-4 text-lg font-bold text-green-600  hover:text-red-800"><Link data-testid="cart" to="/cart">Cart {cartItems.length}</Link></li>
            </ul>
           </div>
           <h3 data-testid="isOnline" className="">{isOnline ? "you are online" : "you are offline"}</h3>
           <div>
            <h2>{userInfo.name}</h2>
            <h3>{userInfo.email}</h3>
            </div>
           {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>LogOut</button>): (<button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
        </div>
    )
}

export default Header;