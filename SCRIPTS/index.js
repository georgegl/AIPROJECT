window.onload = applyRandomBackground

var backgroundImages = ["./IMAGES/indexBackground1.jpg", "./IMAGES/indexBackground2.jpg",
    "./IMAGES/indexBackground3.jpg"]

function applyRandomBackground() {
    var randomNum = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = "url(" + backgroundImages[randomNum] + ")";
}

function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
        alert("This browser does not support desktop notification");
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
        window.open("./HTML/dashBoard.html", '_self');
    }
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function (permission) {
            if (permission === "granted") {
                window.open("./HTML/dashBoard.html", '_self');
            }
        });
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them any more.
}