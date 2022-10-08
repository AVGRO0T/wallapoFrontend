import {ItemlistController } from "./item-list/ItemlistController.js"
import { NotificationsLoad } from "./Notifications/NotificationController.js"
 
document.addEventListener('DOMContentLoaded', () => {
    const createAdElementsControllers = () => { 
        const loadListElement = document.querySelector('#ad-container');
        const notificationsLoaded = document.querySelector ('body')
        const NotificationController = new NotificationsLoad(notificationsLoaded);
        const adListController = new ItemlistController(loadListElement);
    }
    
    

createAdElementsControllers();
})