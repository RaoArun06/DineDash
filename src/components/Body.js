import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Restro_Card, {Special_offer} from "./Restro_Card";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTRO_IMG_URL } from "../utils/constants";
import { RESTRO_LIST } from "../utils/constants";
const Body= ()=>{
  const [Restro_data, setRestro_data]=useState([]);
  const [FilterRestro_data, setFilterRestro_data]=useState([]);
  const [Search_data, setSearch_data]=useState("");
  const Restro_Card_offer = Special_offer(Restro_Card);
  useEffect(()=>{
    fetchdata();
  },[]);
  const fetchdata= async ()=>{
    const data=await fetch(RESTRO_LIST);
    const json =await data.json();
    setRestro_data(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestro_data(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  return Restro_data.length ==0?<Shimmer/>: (
    <div className="Body px-48 bg-slate-400">
            <div className="serach py-5 flex items-center">
              <input type="text" className="search_input ml-4 px-3 rounded-lg" placeholder="search for restaurant" value={Search_data} onChange={(e)=>setSearch_data(e.target.value)}/>
              <button className="h-6 w-20 border-2 rounded-full flex justify-center items-center" onClick={()=>{
                setFilterRestro_data(Restro_data.filter((value)=>value.info.name.toLowerCase().includes(Search_data.toLowerCase())));
              }}>Search</button>
            </div>
            <div className="Filter h-24 flex mx-5 items-center">
                <button className="h-10 w-20 border-2 rounded-full" onClick={()=>{
                  setRestro_data(Restro_data.filter((value)=>value.info.avgRating>4))
                }}>click me</button>
            </div>
            
            <div className="Restro_Card flex flex-wrap">
                {FilterRestro_data.map((Restro) => (
                  <Link to={"/RestaurantMenu/"+Restro.info.id} key={Restro.info.id}>{Restro.info.aggregatedDiscountInfoV3===undefined?<Restro_Card  Restro_info={Restro}/>:<Restro_Card_offer  Restro_info={Restro}/>}</Link>
                ))}
            </div>  
            
      </div>
    )
  }
export default Body;