import {ItemlistController } from "./item-list/ItemlistController.js"

document.addEventListener('DOMContentLoaded', () => {
    const createAdElementsControllers = () => { 
        const loadListElement = document.querySelector('#ad-container');
        const adListController = new ItemlistController(loadListElement);
    }
    
    

createAdElementsControllers();
})