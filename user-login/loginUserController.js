import { loginApiUser } from "./loginUserApi.js";
import { pubSub } from "../Notifications/pubSub.js";
export class SignupController {
    constructor(nodeElement) {
      this.signupElement = nodeElement;
  
      this.subscribeToEvents()
    }
  
    subscribeToEvents() {
      const createItemButton = this.signupElement.querySelector('#loginUser');
      this.signupElement.addEventListener('submit', (event) => {
        event.preventDefault();
      })
      createItemButton.addEventListener('click', () => {
       this.validateLogin()
      });
    }
  
    async validateLogin(){
      const formData = new FormData(this.signupElement)
      const user = formData.get('username')
      const password = formData.get('password')
      
      try {
        const token = await loginApiUser(user, password)
        localStorage.setItem('token',token); 
      } catch (error) {
        pubSub.publish(pubSub.TOPICS.NOTIFICATION_ERROR,`Contraseña o usuario incorrecto`)
      }
    }
    
    
  }