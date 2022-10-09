import { sparrestApi } from "../SparrestApi.js";

export const getItemId = async (itemsId) => {
    const items = await sparrestApi.get(`${sparrestApi.endpoints.items}/${itemsId}?_expand=userid`)
  
    return items;
  }
  
  export const removeitemsById = async (itemsId) => {
    await sparrestApi.delete(`${sparrestApi.endpoints.items}/${itemsId}`)
  }
  