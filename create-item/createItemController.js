import { createItem } from "./getItem.js";

export class CreaItemController {
    constructor(nodeElement) {

    this.createItemElement = nodeElement;

    this.createItemEvents()
    }
    createItemEvents() {

        const createItemButton = this.createItemElement.querySelector('#save')

        this.createItemElement.addEventListener('submit', (event) => {
          event.preventDefault();
        })
        createItemButton.addEventListener('click', () => {
          this.createItem()  
        })
      }
    
      createItem() {
        const formData = new FormData(this.createItemElement);
        const item = formData.get('item');
        createItem(item);
    }
 }
    
