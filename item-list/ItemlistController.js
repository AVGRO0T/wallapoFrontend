import { ListCommodityView } from "./Item-html-container.js";
import { pubSub } from "../Notifications/pubSub.js";
export class ItemlistController {

    constructor(nodeElement) {
        this.itemDetailElement = nodeElement;

        this.loadContainer();
    }
    loadContainer () {
        this.itemDetailElement.innerHTML = ListCommodityView();
    }
    
}