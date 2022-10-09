import {ItemDetailController } from "./itemDetailController.js"
import { NotificationsLoad } from "../Notifications/NotificationController.js"
 
document.addEventListener('DOMContentLoaded', () => {
    
    const loadListElement = document.querySelector('.detail-Item');
    const notificationsLoaded = document.querySelector ('.notifications')
    
    const params = new URLSearchParams(location.search)
    const itemid = params.get('id')
    
    const itemDetailController = new ItemDetailController (loadListElement);
    itemDetailController.drawItemDetail(itemid)
    const NotificationController = new NotificationsLoad (notificationsLoaded);
    
    
      
})