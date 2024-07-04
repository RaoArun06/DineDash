import React, { useState } from 'react'
import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
import { RESTRO_MENU_URL } from '../utils/constants'
import useRestaurantMenu from '../utils/useRestaurantMenu'
const RestaurantMenu = () => {
  const {resId}=useParams();
  const Menu= useRestaurantMenu(resId);
  if(Menu == null){
      return <h1>Loading....</h1>
  }
  return (
    <div>
      <h1>RestaurantMenu</h1>
      <div>
        {Menu.map((item) => (
          <div key={item.card.info.id}>
            <h2>{item.card.info.name}</h2>
            <p>{item.card.info.description}</p>
            <p>Price: {item.card.info.price/100}</p>
            <p>Rating: {item.card.info.ratings.aggregatedRating.rating}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RestaurantMenu
