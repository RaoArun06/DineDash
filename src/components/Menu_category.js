import React from 'react'
import Item_list from './Item_list'
const Menu_category = ({menu_category,showItems,setshowIndex}) => {
    const handleclick = () => {
        setshowIndex();
    }
  return (
    <div>
      <div className=' bg-gray-50 shadow-lg p-4 my-6'>
        <div className='flex justify-between cursor-pointer' onClick={handleclick}>
            <h1 className='font-bold text-lg'>{menu_category.title} ({menu_category.itemCards.length})</h1>
            <h1>🔽</h1>
        </div>
        {showItems && <Item_list sub_menu={menu_category.itemCards}/>}
      </div>
      
    </div>
  )
}

export default Menu_category
