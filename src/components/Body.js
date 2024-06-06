import { useState,useEffect ,useContext} from "react";
import RestrauntCard from "./RestrauntCard"
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData} from "../utils/helper"
import { Fetch_Restaurant } from "../constant";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";


const Body = ({user})=>{

  
 const [searchTxt,setSearchTxt] = useState("");
 const [filteredRestaurants,setFilteredRestaurants]= useState([]);
 const [allRestaurant,setAllRestaurant]= useState([]);  

 const {userInfo, setUserInfo}= useContext(userContext);

useEffect(()=>{
  getRestaurants();
},[]);

async function getRestaurants(){
    const data = await fetch(Fetch_Restaurant)
    const json= await data.json();
    setAllRestaurant(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards )
    setFilteredRestaurants(json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards )
}

const isOnline = useOnline();

if(!isOnline){
    return <h1>Offline, Check your Internet Connection</h1>
}

if(filteredRestaurants.length===0 && allRestaurant.length!==0){
    return (
        <>
            <h1 className="shimmer">No restaurant Match Your filter</h1>
        </>
    )
}
 return (filteredRestaurants.length === 0 )? 
    <>
     <Shimmer/>
    </> : 
    (
        <>
        <div className="py-4 px-2 my-4 bg-pink-50 shadow-md">
             <input className="focus:bg-green-50" type="text" placeholder="search" value={searchTxt} onChange={(e)=>{setSearchTxt(e.target.value);}} />
             <button data-testid="search" className="bg-orange-400 px-4 ml-2 rounded-2xl hover:bg-orange-700" onClick={()=>{
                const data = filterData(searchTxt,allRestaurant);
                setFilteredRestaurants(data);
            }}>Search</button>

            <input className="focus:bg-green-50 ml-10" type="text" value={userInfo.name} onChange={(e)=>{
                setUserInfo({
                    name: e.target.value,
                    email: "new mail"
                })
            }} />
            
        </div> 

        <div className="flex flex-wrap justify-between px-10">
           {filteredRestaurants.map((restaurant)=>{
            return(
             <Link to={"/restaurant/"+restaurant?.card?.card?.info?.id } key={restaurant?.card?.card?.info?.id}>  <RestrauntCard user={user} {...restaurant?.card?.card?.info} key={restaurant?.card?.card?.info?.id} /> </Link>
            )
           })}
        </div>
        </>
    )
}

export default Body;