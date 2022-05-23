
import axios from "axios";
import {ItemType} from "./item.type";
import {ItemScheme} from "../../@types/item";

const BASE_URL = process.env.REACT_APP_URL as string



export async function getAllItems() {
    return axios.get(BASE_URL + "items")
}


export async function buyItem(data: ItemScheme) {
    return axios.post(BASE_URL + "buy", data)
}




