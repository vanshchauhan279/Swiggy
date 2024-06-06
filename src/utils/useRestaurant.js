import { useState,useEffect } from "react";

const useRestaurant = (id)=>{
    const[restaurant,setRestaurant]= useState(null);
    
     //API fetch
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    
    async function getRestaurantInfo (){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66500&lng=77.44770&restaurantId="+id+"&catalog_qa=undefined&isMenuUx4=true&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A6249%2C%22primaryRestaurantId%22%3A73611%2C%22cloudinaryId%22%3A%2218d8b8fb6bac8063a6fa886e20148110%22%2C%22brandId%22%3A6249%2C%22dishFamilyId%22%3A%22846706%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION")
        const json = await data.json();
        console.log(json);
        setRestaurant(json?.data);
    }

    return restaurant;

}
export default useRestaurant;