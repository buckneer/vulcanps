import {CategoryType} from "../services/item/category.type";


export interface Item {
    _id: string,
    name: string,
    price: string,
    icon: string,
    category: CategoryType['name'];
}

export interface ItemScheme {
    itemName: string,
    username: string,
}
