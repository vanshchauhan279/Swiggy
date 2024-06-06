export function filterData(searchTxt,allRestaurant){
    const data= allRestaurant.filter((restaurant)=>
         restaurant?.card?.card?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase()));
    return data;

}