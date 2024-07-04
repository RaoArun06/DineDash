import React from 'react'
import { useEffect, useState } from 'react'
import { RESTRO_MENU_URL } from '../utils/constants';

const useRestaurantMenu = (resId) => {
    useEffect(() => {
        fetchMenu();
    }, [])
    
    const [Menu , setMenu]=useState(null);
    const fetchMenu = async () => {
        const data = await fetch(
            RESTRO_MENU_URL+resId
        );
        const json= await data.json();
    
        const menu = json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card?.itemCards;
        setMenu(menu);
    }
    return Menu;
    
}

export default useRestaurantMenu;