const Shimmer =()=>{
    return(
    <>
       <div data-testid="shimmer" className="restaurant-list">{
       Array(10).fill("").map((e,index)=> <div key={index} className="shimmer"></div>)
       }
       </div>
    </>
    )
}
export default Shimmer;