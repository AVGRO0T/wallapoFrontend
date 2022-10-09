import {ItemDetailController } from "./itemDetailController.js"
import { NotificationsLoad } from "../Notifications/NotificationController.js"
 
document.addEventListener('DOMContentLoaded', () => {
    
    const loadListElement = document.querySelector('.detail-Item');
    const notificationsLoaded = document.querySelector ('.notifications')
    
    const locationId = new URLSearchParams(location.search)
    const itemid = locationId.get('id')
    
    const NotificationController = new NotificationsLoad (notificationsLoaded);

    const itemDetailController = new ItemDetailController (loadListElement);
    
    
      
})