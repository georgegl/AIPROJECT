window.onload = applyRandomBackground;

var backgroundImages = ["/AIPROJECT/IMAGES/indexBackground1.jpg", "/AIPROJECT/IMAGES/indexBackground2.jpg",
    "/AIPROJECT/IMAGES/indexBackground3.jpg"];

function applyRandomBackground() {
    let randomNum = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = "url(" + backgroundImages[randomNum] + ")";
}

function notifyMe() {
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    else if (Notification.permission === "granted") {
        new Notification("Hi there!");
    }
    else if (Notification.permission !== "denied") {
        Notification.requestPermission(function (permission) {
            if (permission === "granted") {
                new Notification("Hi there!");
            }
        });
    }

}