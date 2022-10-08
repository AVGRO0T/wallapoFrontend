import { pubSub } from "../Notifications/pubSub.js";
import { ListCommodityView } from "./Item-html-container.js";

export class ItemlistController {

    constructor(nodeElement) {
        this.itemDetailElement = nodeElement;

        this.loadContainer();
        
    }
  
    loadContainer () {
        this.itemDetailElement.innerHTML = ListCommodityView();
          
       
        
        
    }
    
}