import  {useState} from "react";

const Section = ({title,description , isVisible , setIsVisible})=>{
   return(
    <div className="border-solid border-2  border-black m-2">
    <h3 className="p-3 text-red-500 font-medium">{title}</h3>
    {isVisible? 
    (<div> 
      <button onClick={()=>{setIsVisible("")}}>Hide</button> 
      <p>{description} </p>
    </div>) 
    : (<div> <button onClick={()=>setIsVisible(true)}>Show</button> </div>) } 
    </div>
   )
}

  const InstaMart = ()=>{
   const [visibleSection,setVisibleSection]= useState("team");
   console.log(setVisibleSection);
    return(
        <>
        <h1 className="bg-green p-3 font-bold text-2xl text-green-600">InstaMArt</h1>

          <Section title= {"About InstaMart"}  description= {"this is a one section about InstaMart Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur molestiae voluptatibus eaque repellendus officia? Ab rem quam minima! Enim, cumque."} 
          isVisible={visibleSection == "about"} 
          setIsVisible={()=>setVisibleSection("about")}    
         /> 

          <Section title= {"Team InstaMart"}  description= {"this is a one team section about InstaMart Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur molestiae voluptatibus eaque repellendus officia? Ab rem quam minima! Enim, cumque."}  
          isVisible={visibleSection == "team"} 
          setIsVisible={()=>setVisibleSection("team")}/>

          <Section title= {"Carrer  "}  description= {"this is a one team section about InstaMart Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur molestiae voluptatibus eaque repellendus officia? Ab rem quam minima! Enim, cumque."} 
          isVisible={visibleSection == "carrer"} 
          setIsVisible={()=>setVisibleSection("carrer")}/>
         
        </>
    )
}
export default InstaMart;