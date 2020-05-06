import React, { useContext } from 'react'
import './Basket.scss'
import { splitState } from '../../../constants/functions/splitAndJoinCookie'
import { BasketContext } from '../../../context/basket/BasketContext'
import { IStateItem, IListFood } from '../../../constants/interfaces/interfaces'
import { ProductLine } from '../../../components/ProductLine/ProductLine'
import pastaList from '../../../products/pasta.json'
import pizzaList from '../../../products/pizza.json'
import soupList from '../../../products/soup.json'
import { Link } from 'react-router-dom'

export const Basket: React.FC = () => {
    const { shoppingList, removeProduct, resetBasket } = useContext<any>(BasketContext)
    const selectProduct: Array<IStateItem> = splitState(shoppingList)
    selectProduct.splice(0,1)
    const productList: Array<IListFood> = [...pastaList, ...pizzaList, ...soupList]

    return (
        <div className='container__content'>
            <section className='basket'>
            {selectProduct.length?
            <>
                <h1 className='basket__header'>Ваш заказ:</h1>
                <div className='basket__list'>
                    {selectProduct.map(item=>{
                        return(
                            <ProductLine productList={productList} clickDell={removeProduct} key={item.id} id={String(item.id)} name={String(item.name)} weight={String(item.weight)} price={String(item.price)} />
                        )
                    })}
                </div>
                <div className='basket__button-group'>
                    <button className='basket__button basket__button-reset' onClick={()=>resetBasket()}>Очистить корзину</button>
                    <button className='basket__button basket__button-checkout' onClick={()=>resetBasket()}>
                        <Link to='/food-delivery/checkout'>Оформить заказ</Link>
                    </button>
                </div>
            </>
            :
                <h1 className='basket__empty'>Корзина пуста</h1>
            }
            </section>
        </div>
    )
}