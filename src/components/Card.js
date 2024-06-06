import { useDispatch, useSelector } from "react-redux";
import WishList from "./WishList";

import { clearCart } from "../utils/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector(store => store.cart.items)
    const dispatch = useDispatch();
    const handleClear =()=>{
        dispatch(clearCart());
        console.log("heki")
    }
    return(
        <div>
            <h1 className="font-bold text-3xl m-3">Cards Items</h1>
            <button className="bg-green-400 p-1 m-2 rounded-2xl" onClick={()=>handleClear()}>Clear-Item</button>
            <div className="flex">
            {cartItems.map((item)=>{
                return(
                <WishList  {...item}/>
                )
              })}
            </div>
        </div>
    )
}

export default Cart;