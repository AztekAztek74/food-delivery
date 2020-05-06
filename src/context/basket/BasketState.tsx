import React, {useReducer, useEffect} from 'react'
import { basketReducer } from './basketReducer'
import { BasketContext } from './BasketContext'
import { ADD_PRODUCT, REMOVE_PRODUCT, RESET_BASKET } from '../typesReducers'

export const BasketState: React.FC =({children}) =>{
    const cookieData = (data: string) =>{
        const list: Array<string> = data.split(';')
        let result: string
        list.forEach(item=>{
            if (item.includes('shoppingList')){
                result = item.split('=')[1]
            }
        })
        return result!
    }

    const [state, dispatch] = useReducer(basketReducer, cookieData(document.cookie) || '')

    const addProduct = (id: string, name:string, weight:number, price:number ) =>{
        dispatch({
            type: ADD_PRODUCT,
            payload: {
                id,
                name,
                weight,
                price
            }
        })
    }

    const removeProduct = (id: string) =>{
        dispatch({
            type: REMOVE_PRODUCT,
            payload: {
                id
            }
        })
    }

    const resetBasket = () =>{
        dispatch({
            type: RESET_BASKET
        })
    }


    useEffect(()=>{
        const date: Date = new Date(Date.now() + 86400e3)
        const dateStr: string = date.toUTCString()
        document.cookie = `shoppingList=${state}; path=/; expires=${dateStr}; samesite=lax;`
    }, [state])

    return(
        <BasketContext.Provider value={{
            shoppingList: state,
            addProduct, removeProduct, resetBasket
        }}>
            {children}
        </BasketContext.Provider>
    )
}