import { sparrestApi } from "../SparrestApi.js";

export const createItem = (name, price, status, description, file) => {

    sparrestApi.post(sparrestApi.endpoints.items, {
        description: description,
        name: name,
        price: price,
        status: status,
        file: file
    })
}
