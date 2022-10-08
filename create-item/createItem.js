import { CreaItemController } from "./createItemController.js"
import { NotificationsLoad } from "../Notifications/NotificationController.js"
 
document.addEventListener('DOMContentLoaded', () => {
    const createAdElementsControllers = () => { 
        const loadListElement = document.querySelector('.form_item');
        const notificationsLoaded = document.querySelector ('body')
        const NotificationController = new NotificationsLoad(notificationsLoaded);
        const adListController = new CreaItemController(loadListElement);
    }
    
    

createAdElementsControllers();
})