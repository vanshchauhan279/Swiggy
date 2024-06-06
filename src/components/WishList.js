const WishList = ({name,description,category})=>{    
    return (
        <div className="my-3 mx-2 border-2 p-4 h-80 w-52 rounded-xl bg-blue-50 hover:bg-blue-200 overflow-hidden">
            {/* <img className="h-40 w-40 rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}alt="item" /> */}
            <h2 className="my-1 font-bold text-xl">{name}</h2>
            <h3>{description}</h3>
            <h4>{category}</h4>
            {/* <h4 className="my-1">{avgRating} stars</h4> */}
            {/* <h4>{areaName}</h4> */}
        </div>
    )
}       
export default WishList;