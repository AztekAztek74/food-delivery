import { ADD_PRODUCT, REMOVE_PRODUCT, RESET_BASKET } from '../typesReducers'
import { IActionData, IStateItem } from '../../constants/interfaces/interfaces'
import { TShoppingList } from '../../constants/types/types'
import { splitState, joinState } from '../../constants/functions/splitAndJoinCookie'

export const basketReducer = (state: TShoppingList, action: IActionData): TShoppingList =>{
    
    switch (action.type){
        case ADD_PRODUCT:
            const temporaryArrayAdd: Array<IStateItem> = splitState(state)
            const temporaryStateAdd: Array<IStateItem> = [...temporaryArrayAdd,{
                id: action.payload!.id, 
                name: action.payload!.name,
                weight: action.payload!.weight, 
                price: action.payload!.price
            } ]
            return joinState(temporaryStateAdd)

        case REMOVE_PRODUCT:
            const temporaryArrayRemove: Array<IStateItem> = splitState(state)
            const temporaryStateRemove: Array<IStateItem> = temporaryArrayRemove.filter(item => item.id!==action.payload!.id)
            return joinState(temporaryStateRemove)

        case RESET_BASKET:
            return state=''

        default: return state
        
    }

}