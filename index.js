import {ItemlistController } from "./item-list/ItemlistController.js"
import { NotificationsLoad } from "./Notifications/NotificationController.js"
 
document.addEventListener('DOMContentLoaded', () => {
    const createAdElementsControllers = () => { 
        const loadListElement = document.querySelector('#ad-container');
        const notificationsLoaded = document.querySelector ('body')
        const NotificationController = new NotificationsLoad(notificationsLoaded);
        const adListController = new ItemlistController(loadListElement);
    }
    
    const handleUserLogged = () => {
        const token = localStorage.getItem('token')
        const userActions = document.querySelector('#user-actions')
        if (token) {
          userActions.innerHTML = '<a href="./create-item/createitem.html">Añadir nuevo producto</a>'
        } else {
          userActions.innerHTML = '<a href="./create-user/user-form.html">Inicia sesión</a>'
        }
      }
      createAdElementsControllers();
      handleUserLogged ();
})