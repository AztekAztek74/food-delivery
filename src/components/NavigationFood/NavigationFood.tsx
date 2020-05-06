import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavigationFood.scss'

export const NavigationFood: React.FC = () =>{
    return(
        <nav className='navigation-food'>
            <div className='navigation-food__links'>
                <div className='navigation-food__item'>
                    <NavLink to='/food-delivery/food/pasta'>Паста</NavLink>
                </div>
                <div className='navigation-food__item'>
                    <NavLink to='/food-delivery/food/pizza'>Пицца</NavLink>
                </div>
                <div className='navigation-food__item'>
                    <NavLink to='/food-delivery/food/soup'>Супы</NavLink>
                </div>
            </div>
        </nav>
    )
}