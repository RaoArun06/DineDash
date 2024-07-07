import React, { useState } from 'react'
import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { RESTRO_MENU_URL } from '../utils/constants'
import useRestaurantMenu from '../utils/useRestaurantMenu'
import Menu_category from './Menu_category'
const RestaurantMenu = () => {
  const {resId}=useParams();
  const All_data= useRestaurantMenu(resId);
  const [showIndex, setshowIndex]=useState(null);
  if(All_data == null){
    return <h1>Loading....</h1>
  }
  const restro_basic_details = All_data[2].card?.card?.info;
  const {name,avgRating,areaName,feeDetails,sla}=restro_basic_details;
  const destructure = All_data[4].groupedCard?.cardGroupMap?.REGULAR.cards;
  const Menu = destructure.filter((c)=>
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  )
  return (
    <div className='mx-80 my-10'>
      <h1 className='font-bold text-3xl text-center'>{name}</h1>
      <div className='my-5 text-lg border-4 p-5 rounded-lg max-w-96 shadow-lg'>
        <h1>Rating - {avgRating} ❇️</h1>
        <h1>Area - {areaName}</h1>
        <h1>Distance - {sla.lastMileTravelString}</h1>
        <h1>Time to reach - {sla.slaString} 🚲</h1>
        <h1>Delivery charge - {feeDetails.totalFee/100}</h1>
      </div>
      <div>
        {Menu.map((item,index) =>(
          <div key={item.card?.card?.title}>
            <Menu_category menu_category={item?.card?.card} showItems={index===showIndex && true} setshowIndex={()=>setshowIndex(index)}/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantMenu
