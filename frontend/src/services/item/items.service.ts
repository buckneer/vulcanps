
import axios from "axios";
import {ItemType} from "./item.type";
import {AddItemSchema, ItemScheme} from "../../@types/item";

const BASE_URL = process.env.REACT_APP_URL as string



export async function getAllItems() {
    return axios.get(BASE_URL + "items")
}


export async function buyItem(data: ItemScheme) {
    return axios.post(BASE_URL + "buy", data)
}

export async function deleteItem(name: string, adminSecret: string) {
    return axios.delete(BASE_URL + "items", {data: {
            name,
            adminSecret
        }})
}
export async function addNewItem(newItem: AddItemSchema) {
    return axios.post(BASE_URL + "items", newItem);
}

export async function auth(adminSecret: string) {
    return axios.post(BASE_URL + "admin", {adminSecret})
}


