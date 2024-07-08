import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Item_list from './Item_list';
import { clearCart } from '../utils/cartSlice';
const Cart = () => {
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch= useDispatch();
    const handleclick=()=>{
        dispatch(clearCart());
    }
  return (
    <div className='mx-80 my-10'>
        <div className='flex justify-between'>
            <h1 className='text-center font-extrabold text-2xl'>Cart Items</h1>
            <button className='border-emerald-400 border-2 px-1 font-semibold text-lg shadow-md rounded-lg flex-row-reverse' onClick={handleclick}>Clear Cart</button>
        </div>
        
        {cartItems===undefined?<h1>Add items to cart</h1>:<Item_list sub_menu={cartItems} />}
    </div>
  )
}

export default Cart
