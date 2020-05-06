export interface IActionData {
    type: string,
    payload?: IStateItem
}

export interface IStateItem {
    [key: string]: string | number;
}

export interface IList {
    shoppingList: Array<string>
} 

export interface ISize {
    [key: string]: Array<number>;
}

export interface IListFood {
    id: string,
    name: string,
    images: string,
    tags: Array<string>,
    description: string,
    size: ISize
}

export interface IActiveSize {
    id:string,
    active: string
}

export interface IFoodListSelect{
    size: object, 
    id: string,
    change (id: string, size: string): void
}

export interface IProductLine{
    id: string,
    name: string,
    weight: string,
    price: string,
    productList: Array<IListFood>,
    clickDell (id: string):void
}