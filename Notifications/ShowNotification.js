export const htmlNotification = (warning) => {

    return `
    <div id="showNotification">
    <h3> ${warning} </h3>
    <button id="closeNotification">X</button>
    </div>
    
    `
}