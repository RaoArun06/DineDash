import React, { useState } from 'react'
import { useEffect , useState} from 'react'
import { useParams } from 'react-router-dom'
const RestaurantMenu = () => {
    useEffect(() => {
      fetchMenu();
    }, [])
    const {resId}=useParams();
    const [Menu , setMenu]=useState(null);
    const fetchMenu = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId="+resId
        );
        const json= await data.json();
        
        const menu = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards;
        setMenu(menu);
    }
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
