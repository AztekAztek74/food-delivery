import { IStateItem } from '../../constants/interfaces/interfaces'
import { TShoppingList } from '../../constants/types/types'

export const splitState = (str: TShoppingList): Array<IStateItem>=>{
    const data1: Array<string> = str.split('%')
    const data2: Array<IStateItem> = []
    data1.map(item =>{
        const data3: Array<string> = item.split('&')
        const newProduct: IStateItem ={}
        data3.map(inner=>{
            const data4 = inner.split('$')
            const key = data4[0]
            newProduct[key] = data4[1]
            return inner
        })
        data2.push(newProduct)
        return item
    })
    return data2
}

export const joinState = (arr: Array<IStateItem>): TShoppingList =>{
    const data1: any = []
    let data2: string = ''
    const data3: Array<string> = []
    arr.map(inner=>{
        data1.push(Object.entries(inner))
        return inner
    })

    data1.map((item:Array<Array<string>>) =>{
        const data5:Array<string> = []
        item.map(inner =>{
            data5.push(inner.join('$'))
            return inner
        })
        data3.push(data5.join('&'))
        return item
    })
    data2 = data3.join('%')
    return data2
}