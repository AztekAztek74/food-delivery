import React from 'react'
import { Select } from 'antd'
import 'antd/dist/antd.css'
import { IFoodListSelect } from '../../../constants/interfaces/interfaces'

const { Option } = Select

export const FoodListSelect: React.FC<IFoodListSelect> =({id, size, change}) =>{

    const arrayData = () =>{
        let arr: Array<string> = []
        for(let key in size){
            arr.push(key)
        }
        return arr
    }

    const sizeTranslate = (item: string) =>{
        switch (item){
            case 'small':
                return 'Малый'
            case 'standart':
                return 'Стандартный'
            case 'big':
                return 'Большой'
        }
    }

    const handleChange = (value:string)=>{
        change(id, value)
    }

    return(
        <Select defaultValue='standart' onChange={handleChange} >
            {arrayData().map(item=>{
                return(
                    <Option key={item} value={item}>{sizeTranslate(item)}</Option>
                )
            })}
            
        </Select>
    )
}