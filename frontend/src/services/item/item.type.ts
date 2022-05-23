import {CategoryType} from "./category.type";


export interface ItemType {
    name: string,
    price: string,
    icon: string,
    category: CategoryType['name'];
}
