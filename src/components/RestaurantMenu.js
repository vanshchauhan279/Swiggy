import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaurantMenu= ()=>{
    const params = useParams();   
    const {id}= params ;
    const restaurant= useRestaurant(id);
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));

    }
    
    return !restaurant ? (<Shimmer/>) : (   
           
        <div className=" flex justify-around ">
          <div>
             <h1 className="font-bold text-red-700">Restaurant ID: {id}</h1>
             <h2 className="p-4 text-blue-700">{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
             <img className="w-80 m-4" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+restaurant?.cards[2]?.card?.card?.info?.cloudinaryImageId}alt="item" />
             <h3>{restaurant?.cards[2]?.card?.card?.info?.costForTwoMessage}</h3>
             <h3>{restaurant?.cards[2]?.card?.card?.info?.locality}</h3> 
             
         </div>
         <div className="ml-10">
            <h1 className="font-bold text-red-700">Menu</h1>
            {
            restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item)=>{
                return(
                <li key={item?.card?.info?.id} >{item?.card?.info?.name} <button className="m-2 pl-2 pr-2 bg-stone-500" onClick={()=>handleAddItem(item?.card?.info)}>ADD</button></li>
                )
               })
            }
         </div>
         </div>
 
    )}
    export default RestaurantMenu;