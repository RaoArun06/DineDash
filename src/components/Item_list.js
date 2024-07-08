import React from 'react'
import { RESTRO_IMG_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addToCart } from '../utils/cartSlice'
const Item_list = ({sub_menu}) => {
  const dispatch = useDispatch();
  const HandleAdd=(prop)=>{
    dispatch(addToCart(prop));
  }
  return (
    <div>
      {sub_menu.map((item)=>(
        <div className='flex justify-between m-10 pb-10 border-b-2' key={item.card.info.id}>
            <div>
                <h1 className='text-xs'>{item.card.info.isVeg===1?"🟢":"🔴"}</h1>
                <h1 className='font-bold'>{item.card.info.name}</h1>
                <h1>₹ {item.card.info.price/100}</h1>
                <h1>❇️ {item.card.info.ratings.aggregatedRating.rating}</h1>
            </div>
            <div className='flex flex-col items-center justify-between h-28'>
                <img className='h-24' src={RESTRO_IMG_URL+item.card.info.imageId}/>
                <button className=' border-emerald-400 border-2 px-1 font-semibold text-lg shadow-md rounded-lg' onClick={()=>HandleAdd(item)}>Add</button>
            </div>
        </div>
      ))}
    </div>
  )
}

export default Item_list
