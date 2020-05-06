import React from 'react'
import { FoodList } from '../../../components/FoodList/FoodList'
import pastaList from '../../../products/pasta.json'

export const PastaPage: React.FC = () =>{
    return(
        <div className='container__content'>
            <FoodList listFood={pastaList} />
        </div>
    )
}