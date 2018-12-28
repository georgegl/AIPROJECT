function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    else if (Notification.permission === "granted") {
        triggerNotification();
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                triggerNotification()
            }
        });
    }

}

let main = async function(){
    startNotificationEngine();
};

document.addEventListener("DOMContentLoaded", main());



