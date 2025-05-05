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
    <div className="bg-slate-100 min-h-screen px-4 md:px-16 lg:px-32 py-8">
  {/* Search & Filter Section */}
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
    
    {/* Search Bar */}
    <div className="flex items-center w-full md:w-2/3 gap-3">
      <input
        type="text"
        placeholder="Search for restaurants..."
        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        value={Search_data}
        onChange={(e) => setSearch_data(e.target.value)}
      />
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
        onClick={() => {
          setFilterRestro_data(
            Restro_data.filter((value) =>
              value.info.name.toLowerCase().includes(Search_data.toLowerCase())
            )
          );
        }}
      >
        Search
      </button>
    </div>

    {/* Filter Button */}
    <button
      className="bg-white border border-orange-500 text-orange-600 px-4 py-2 rounded-md hover:bg-orange-50 transition"
      onClick={() => {
        setRestro_data(Restro_data.filter((value) => value.info.avgRating > 4));
      }}
    >
     Restaurants with rating &gt; 4
    </button>
  </div>

  {/* Restaurant Cards Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {FilterRestro_data.map((Restro) => (
      <Link to={"/RestaurantMenu/" + Restro.info.id} key={Restro.info.id}>
        {Restro.info.aggregatedDiscountInfoV3 === undefined ? (
          <Restro_Card Restro_info={Restro} />
        ) : (
          <Restro_Card_offer Restro_info={Restro} />
        )}
      </Link>
    ))}
  </div>
</div>

    )
  }
export default Body;