import React, { useState } from "react";
import ReactDOM from "react-dom";
import Restro_Card from "./Restro_Card";
import Restro_list from "../utils/mockdata";
const Body= ()=>{
  const [Restro_data, setRestro_data]=useState(Restro_list);
  return (
    <div className="Body px-48 bg-slate-400">
            <div className="Filter h-24 flex mx-4 items-center">
                <button className="h-10 w-20 border-2 rounded-full items-center" onClick={()=>{
                  setRestro_data(Restro_data.filter((value)=>value.info.avgRating>4))
                }}>click me</button>
            </div>
            
            <div className="Restro_Card flex flex-wrap">
                {Restro_data.map((Restro) => (
                  <Restro_Card key={Restro.info.id} Restro_info={Restro}/>
                ))}
            </div>
            
        </div>
    )
  }
export default Body;