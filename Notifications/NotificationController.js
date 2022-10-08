import { pubSub } from "./pubSub.js";
import { htmlNotification } from "./ShowNotification.js";
export class NotificationsLoad {

    constructor(nodeElement){
        this.notificationsLoad = nodeElement;

        this.suscribeNotification()

    }

    suscribeNotification () {
        pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (warning) => {
            this.HtmlNotification(warning)
            })
    } 
    HtmlNotification(warning) {
        this.notificationsLoad.innerHTML = htmlNotification(warning);
        const closeButtonElement = this.notificationsLoad.querySelector('#closeNotification')
        closeButtonElement.addEventListener('click', () => {
        const showNotification = this.notificationsLoad.querySelector('#showNotification')
            showNotification.classList.add('div_hide') 
            console.log(showNotification)
        }) 
    } 
}