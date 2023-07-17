import React from 'react'
import MenuItems from './MenuItems'

const Menu = ({items}) => {
  return (
    <section className='section-center'>
        {items.map((menuItem)=>{
            return(
                <MenuItems 
                    key={menuItem.id}
                    {...menuItem}
                />
            )
        })}
    </section>
  )
}

export default Menu