import { sparrestApi } from "../SparrestApi.js";

export async function getItems() {

  const endpoint = `${sparrestApi.endpoints.items}?_expand=userid`
  const items = await sparrestApi.get(endpoint)

  return items;
}
