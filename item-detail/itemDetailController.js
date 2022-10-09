import { getItemId, removeitemsById } from "./itemDetailApi.js";
import { itemDetailhtml } from "./itemDetailHtml.js";
import { pubSub } from "../Notifications/pubSub.js";
import { decodeToken } from "../decodeToken.js"

 export class ItemDetailController {
    constructor (nodeElement) {
        this.ItemDetailElement = nodeElement
    }
    async drawItemDetail(itemsId) {
        try {
          const items = await getItemId(itemsId);
          this.items = items;
          this.ItemDetailElement.innerHTML = itemDetailhtml(items)
          alert('¡Carga exitosa!');
          this.drawRemoveButton()
        } catch (error) {
          pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'Error obteniendo el item')
        }
      }
    
      drawRemoveButton() {
        const token = localStorage.getItem('token');
    
        if (token) {
  
          const tokenData = decodeToken(token);
    
          if (tokenData.userId === this.items.userId) {
            const removeButton = this.ItemDetailElement.querySelector('button');
            removeButton.style.display = 'block';
            removeButton.addEventListener('click', () => this.removeitem())
          }
        }
        
      }
    
      async removeitem() {
        const response = window.confirm('¿Seguro que quieres borrar el articulo?');
        if (response) {
          try {
            await removeitemsById(this.items.id)
            alert('item borrado exitosamente');
            window.location = '/'
          } catch (error) {
            pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No se ha podido borrar el articulo')
          }
        }
      }

      }

    



 
