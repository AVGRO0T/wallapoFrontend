import { pubSub } from "../Notifications/pubSub.js";
import { ListCommodityView } from "./Item-html-container.js";
import { getItems } from "./validate-user-item.js";
export class ItemlistController {

    constructor(nodeElement) {
        this.itemDetailElement = nodeElement;

        this.loadContainer();
        
    }
    async loadContainer() {

        let items = [];
    
        try {
          items = await getItems();
        } catch (error) {
          // this.notificationController.showNotification(error)
          pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error cargando productos')
        }
    
        if (items.length === 0) {
          this.ItemsNotFound()
        }
    
        // spinnerElement.remove();
        /* this.itemsdrawitemsContainerElement.querySelector('.spinner').classList.toggle('hide')
    */
        this.drawItems(items) 
        
      }
      ItemsNotFound () {
        const divElement = document.createElement('div');
        divElement.innerHTML = '<p> NO HAY ARTICULOS </p>'
        this.itemDetailElement.appendChild(divElement)
      }
      drawItems(itemsdrawitems) {
        for (const items of itemsdrawitems) {
          const articleElement = document.createElement('div');
        
          articleElement.innerHTML = ListCommodityView(items)
    
          this.itemDetailElement.appendChild(articleElement);
        }
      }
    
}