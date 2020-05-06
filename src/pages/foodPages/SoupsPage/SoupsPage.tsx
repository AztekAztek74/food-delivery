import React from 'react'
import { FoodList } from '../../../components/FoodList/FoodList'
import soupList from '../../../products/soup.json'

export const SoupsPage: React.FC = () =>{
    return(
        <div className='container__content'>
            <FoodList listFood={soupList} />
        </div>
    )
}