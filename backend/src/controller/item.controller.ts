import {get, omit} from "lodash";
// import {addItem, buyItem, deleteItem, getAllItems, getItemsByCategory} from "../service/item.service";
import {Request, Response} from "express";
// import Store, {ItemDocument} from "../model/item.model";
import log from "../logger";
//
//
import {addItem, authenticate, buyItem, deleteItem, getAllItems, getItemsByCategory} from "../service/item.service";
import {ItemDocument} from "../model/item.model";

export async function handleBuyItem(req: Request, res: Response) {

    try {
        let username = req.body.username;
        let itemName = req.body.itemName;


        let newId = buyItem(itemName, username)

        if(newId == null) {
            return res.status(501).send({message: "There was a problem saving your item"})
        }

        // let {user, valid} = await buyItem(itemId, username);

        return res.send({message: "Item bought successfully"});
    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}
//
export async function getAllItemsHandler(req: Request, res: Response) {
    try {
        let items = await getAllItems();
        return res.send(JSON.stringify(items));
    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}

export async function getItemsByCategoryHandler(req: Request, res: Response) {
    try {
        let category = get(req, "params.category");
        let items = await getItemsByCategory({category});
        return res.send(JSON.stringify(items));
    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}
//
export async function addItemHandler(req: Request, res: Response) {
    try {
        let newItem = {
            name: req.body.name,
            price: req.body.price,
            icon: req.body.icon,
            category: req.body.category
        }

        let item = await addItem(newItem, req.body.adminSecret) as ItemDocument;


        if(item) {
            return res.send(item.toJSON());
        } else {
            return res.send({"message": "You're not admin"})
        }

    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}

export async function deleteItemHandler(req: Request, res: Response) {
    try {

        let adminSecret = req.body.adminSecret;
        let itemName = req.body.name;
        let item = await deleteItem(itemName, adminSecret);
        if(item) {
            return res.sendStatus(200)
        } else {
            return res.send({"message": "You're not admin"})
        }

    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}

export async function handleAuth(req: Request, res: Response) {
    try {
        let adminSecret = req.body.adminSecret;
        let admin = await authenticate(adminSecret);
        if(admin) {
            return res.send({message: "admin"})
        } else {
            return res.send({"message": "You're not admin"})
        }
    } catch (error: any) {
        log.error(error.message);
        return res.status(409).send(error.message)
    }
}
