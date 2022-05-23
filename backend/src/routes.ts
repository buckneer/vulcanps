import {Express, Request, Response} from "express";
import validateRequest from "./middleware/validateRequest";
import {
    getAllItemsHandler, getItemsByCategoryHandler,
    handleBuyItem
} from "./controller/item.controller";
import {itemSchema} from "./schema/item.schema";



export default function(app: Express) {
    app.get('/healthcheck', (req : Request, res: Response) => res.sendStatus(200))


    // items
    app.post("/api/buy", validateRequest(itemSchema),handleBuyItem);
    app.get("/api/items", getAllItemsHandler);
    app.get("/api/items/:category", getItemsByCategoryHandler);



}
