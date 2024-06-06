import { Link } from "react-router-dom";
import { useContext } from "react";
import userContext from "../utils/userContext";

const RestrauntCard = ({name,cloudinaryImageId,cuisines,avgRating,areaName,user})=>{    
   
    const {userInfo}= useContext(userContext);
    return (
        <div className="my-3 mx-2 border-2 p-4 h-80 w-52 rounded-xl bg-blue-50 hover:bg-blue-200 overflow-hidden">
            <img className="h-40 w-40 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}alt="item" />
            <h2 className="my-1 font-bold text-xl">{name}</h2>
            <h4 className="my-1">{avgRating} stars</h4>
            <h4>{areaName}</h4>
            <h5>{user.name}</h5>
            <h5>{userInfo.name}</h5>
        </div>
    )
}

export default RestrauntCard;