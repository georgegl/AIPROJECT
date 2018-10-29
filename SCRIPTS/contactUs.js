window.onload = applyRandomBackground;

let backgroundImages = ["/AIPROJECT/IMAGES/indexBackground1.jpg", "/AIPROJECT/IMAGES/indexBackground2.jpg",
    "/AIPROJECT/IMAGES/indexBackground3.jpg"];


function applyRandomBackground() {
    let randomNum = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = "url(" + backgroundImages[randomNum] + ")";
}