import React from "react";
import ReactDOM from "react-dom";
import RESTRO_IMG_URL from "../utils/constants";
const Restro_Card= ({Restro_info})=>{
    if (!Restro_info) {
        return <div>Loading...</div>; // Or handle the undefined case appropriately
    }
    const {name, locality, avgRating, sla, cloudinaryImageId}=Restro_info.info;
    return (
        <div className="Restro_card overflow-hidden mx-5 mb-8">
            <img className="Restro_img rounded-2xl h-52 object-cover w-[21rem]" src={RESTRO_IMG_URL+cloudinaryImageId}/>
            <div className="Restro_info p-3">
                <h3 className="Restro_name">{name}</h3>
                <h3 className="Restro_rating">{avgRating}</h3>
                <h4 className="Restro_time">{sla.slaString}</h4>
                <h4 className="Restro_location">{locality}</h4>
            </div>
            
        </div>
    )
}
export default Restro_Card;