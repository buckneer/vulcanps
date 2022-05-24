import Item, {ItemDocument} from "../model/item.model"
import {DocumentDefinition, FilterQuery} from "mongoose";
import log from "../logger";
import {create, StoreItem} from "../model/storeitem.model";
import "dotenv/config"

export async function getAllItems() {
    try {
        let items = await Item.find() as ItemDocument[];
        return items;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function getItemsByCategory(query: FilterQuery<ItemDocument>) {
    try {
        let items = await Item.find(query) as ItemDocument[];
        return items
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function authenticate(adminSecret: string) {
    try {
        return adminSecret === process.env.ADMIN_PASSWORD as string;
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function addItem(input: DocumentDefinition<ItemDocument>, adminSecret: string) {
    try {

        if(adminSecret === process.env.ADMIN_PASSWORD as string) {
            return Item.create(input);
        } else {
            return null;
        }
    } catch (e: any) {
        throw new Error(e);
    }
}

export async function deleteItem(itemName: string, adminSecret: string) {
    try {

        if(adminSecret === process.env.ADMIN_PASSWORD as string) {
            return await Item.deleteOne({name: itemName});
        } else {
            return null;
        }
    } catch (e: any) {
        throw new Error(e)
    }
}

export async function buyItem(itemName: string, username: string) {

    let newStoreItem : StoreItem = {
        id: 1,
        username: username,
        item_name: itemName,
        payment_method: "paypal"
    }

    create(newStoreItem, (err: Error, itemId: number) => {
        if (err) {
            return null;
        }
        if (itemId == null) {
            return null;
        }

        return itemId
    })




}


export function findItem(query: FilterQuery<ItemDocument>) {
    return Item.findOne(query);
}
