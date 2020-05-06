import React, { useState, useEffect, useContext } from 'react'
import './FoodList.scss'
import { TListFood } from '../../constants/types/types'
import { IActiveSize } from '../../constants/interfaces/interfaces'
import { FoodListTags } from './foodListComponents/FoodListTags'
import { FoodListSelect } from './foodListComponents/FoodListSelect'
import { BasketContext } from '../../context/basket/BasketContext'

export const FoodList: React.FC<{listFood: TListFood}> = ({listFood}) =>{
    const [activeSize, setActiveSize] = useState<IActiveSize[]>([])
    const { addProduct } = useContext<any>(BasketContext)
    useEffect(()=>{
        const dataSize = () =>{
            listFood.map(item =>{
                const newProduct: IActiveSize ={
                    id: item.id,
                    active: 'standart'
                }
                setActiveSize(prev => [newProduct, ...prev])
                return item
            })
        }
        dataSize()
        
    }, [listFood])

    const selectSize = (id: string, size: string) => {
        let arr: Array<IActiveSize> = activeSize
        arr = arr.map(item =>{
            if (item.id === id){
                item = {
                    id: item.id,
                    active: size
                }
            }
            return item
        })
        setActiveSize(arr)
    }

    const selectPrice = (id: string) =>{
        let activePrice: number
        listFood.map(item=>{
            if (item.id === id)
            activeSize.map(inner=>{
                if (id === inner.id){
                    activePrice = item.size[inner.active][1]
                }
                return inner
            })
            return item
        })
        return activePrice!
    }

    const selectWeight = (id: string) =>{
        let activeWeight: number
        listFood.map(item=>{
            if (item.id === id)
            activeSize.map(inner=>{
                if (id === inner.id){
                    activeWeight = item.size[inner.active][0]
                }
                return inner
            })
            return item
        })
        return activeWeight!
    }

    return(
        <section className='food-list'>
                {listFood.map(item=>{
                    return(
                        <div className='product-card' key={item.id}>
                            <div className='product-card__wrapper-img'>
                                <div className='product-card__tags-block'>
                                    <FoodListTags tags={item.tags} />
                                </div>
                                <img className='product-card__img' src={item.images} alt='productImg' />
                            </div>
                            <div className='product-card__wrapper-information'> 
                                <h1 className='product-card__header'>{item.name}</h1>
                                <p className='product-card__description'>{item.description}</p>
                            </div>
                            <div className='product-card__select-block'>
                                <FoodListSelect id={item.id} size={item.size} change={selectSize} />
                            </div>
                            <div className='product-card__price-block'>
                                <p className='product-card__price'><span className='product-card__price_selection'>{selectPrice(item.id)}</span> рублей</p>
                                <p className='product-card__weight'><span className='product-card__weight_selection'>{selectWeight(item.id)}</span> грамм</p>
                            </div>
                            <button onClick={()=>addProduct((new Date()).getTime(), item.id, selectWeight(item.id), selectPrice(item.id))} className='product-card__button'>В корзину</button>
                        </div>
                    )   
                })}
        </section>
    )
}