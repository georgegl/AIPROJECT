function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    else if (Notification.permission !== "denied") {
        Notification.requestPermission();
    }

}

let main = async function(){
    startNotificationEngine();
};

document.addEventListener("DOMContentLoaded", main());



