import React, { useEffect, useState } from 'react'
import './ProductLine.scss'
import { IProductLine } from '../../constants/interfaces/interfaces'
import { CloseOutlined } from '@ant-design/icons'

export const ProductLine: React.FC<IProductLine> = ({id, name, weight, price, productList, clickDell}) => {
    const [img, setImg] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    
    useEffect(()=>{
        const dataProduct = ()=>{
            productList.map(item=>{
                if (item.id === name){
                    setImg(item.images)
                    setTitle(item.name)
                }
                return item
            })
        }
        dataProduct()
    })
    return (
        <section className='product-line'>
            <div className='product-line__title-block'>
                <img className='product-line__img' src={img} alt={title} />
                <h2 className='product-line__title'>{title}</h2>
            </div>
            <div className='product-line__price-block'>
                <p className='product-line__weight'>{weight}<span className='product-line__weight_selection'> грамм</span></p>
                <p className='product-line__price'>{price}<span className='product-line__price_selection'> рублей</span></p>
            </div>
            <div className='product-line__delete'>
                <CloseOutlined onClick={()=>clickDell(id)} />
            </div>
        </section>
    )
}