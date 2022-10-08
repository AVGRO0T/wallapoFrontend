import { sparrestApi } from "../SparrestApi.js";

export const createItem = (Items) => {

    sparrestApi.post(sparrestApi.endpoints.items, {
        content: Items
    })
}