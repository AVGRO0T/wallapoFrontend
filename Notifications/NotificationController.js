import { pubSub } from "./pubSub";
import { htmlNotification } from "./ShowNotification";
export class NotificationsLoad {

    constructor(nodeElement){
        this.notificationsLoad = nodeElement;

        this.suscribeNotification()

    }

    suscribeNotification () {
        pubSub.subscribe(pubSub.TOPICS.NOTIFICATION_ERROR, (warnings) => {
            this.htmlNotification(warnings)
            })
    }
    htmlNotification(warnings) {
        this.notificationsLoad.innerHTML = htmlNotification(warnings);
        const closeButtonElement = this.notificationsLoad.querySelector('#closeNotification')
        closeButtonElement.addEventListener('click', () => {
            document.getElementById('#showNotification').style.visibility = "visible";
        }) 
    }
}