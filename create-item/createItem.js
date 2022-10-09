import { CreaItemController } from "./createItemController.js"
import { NotificationsLoad } from "../Notifications/NotificationController.js"
import { pubSub } from "../Notifications/pubSub.js"
document.addEventListener('DOMContentLoaded', () => {
    const checkUserLogged = () => {
        const token = localStorage.getItem('token');
    
        if (!token) {
          pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR, 'No autorizado')
          setTimeout(() => {
            window.location = '../create-user/user-form.html'
          }, 2000);
        }
      }
    
   
      const notificationsLoaded = document.querySelector ('body')
      const NotificationController = new NotificationsLoad(notificationsLoaded);
      const loadListElement = document.querySelector('.form_item');
        const adListController = new CreaItemController(loadListElement);
 
    
    
checkUserLogged();

})