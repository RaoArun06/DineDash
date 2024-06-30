import React from "react";
import ReactDOM from "react-dom";
import Restro_Card from "./Restro_Card";
import Restro_list from "../utils/mockdata";
const Body= ()=>{
  return (
    <div className="Body px-48 bg-slate-400">
            <div className="Filter h-24 flex mx-4 items-center">
                <button className="h-10 w-20 border-2 rounded-full items-center">click me</button>
            </div>
            
            <div className="Restro_Card flex flex-wrap">
                {Restro_list.map((Restro) => (
                  <Restro_Card key={Restro.info.id} Restro_info={Restro}/>
                ))}
            </div>
            
        </div>
    )
  }
export default Body;