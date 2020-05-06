import React from 'react'
import { FoodList } from '../../../components/FoodList/FoodList'
import pizzaList from '../../../products/pizza.json'

export const PizzaPage: React.FC = () =>{
    return(
        <div className='container__content'>
            <FoodList listFood={pizzaList} />
        </div>
    )
}