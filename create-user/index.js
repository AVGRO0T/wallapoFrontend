import { SignupController } from "./createUserController.js"
import { NotificationsLoad } from '../Notifications/NotificationController.js'

document.addEventListener('DOMContentLoaded', () => {
  const createUserFormElement = document.querySelector('.create-user-form')
  const notificationElement = document.querySelector('.notification')
  
  const signupController = new SignupController(createUserFormElement)
  const notificationController = new NotificationsLoad (notificationElement)
})
