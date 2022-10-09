import { SignupController } from "./loginUserController.js"
import { NotificationsLoad } from '../Notifications/NotificationController.js'

document.addEventListener('DOMContentLoaded', () => {
  const createAdElementsControllers = () => { 
 
  const createUserFormElement = document.querySelector('.create-user-form')
  const notificationElement = document.querySelector('body') 
  
  const notificationController = new NotificationsLoad (notificationElement)
  const signupController = new SignupController(createUserFormElement)}

  createAdElementsControllers()
})
