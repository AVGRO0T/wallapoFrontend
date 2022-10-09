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
          setTimeout(() => {
            alert('Articulo creado');
            window.location = '../index.html'
          }, 100); 
        })
      }
    
      createItem() {
        const formData = new FormData(this.createItemElement);
        const name = formData.get('name');
    const file = formData.get('file');
    const price = formData.get('price');
    const status = formData.get('status');
    const description = formData.get('description');
    createItem(name,status,price,description, file)
    }
   
 }
    
