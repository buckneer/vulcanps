import {object, string} from "yup";

export const itemSchema = object({
    body: object({
        itemName: string().required("Item Id is required"),
        username: string().required("Username is required")
    }),
})

export const createItemSchema = object({
    body: object({
        name: string().required("Name is required"),
        price: string().required("Price is required"),
        category: string().required("Category is required")
    })
})
