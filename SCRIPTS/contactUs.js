window.onload = applyRandomBackground;

let backgroundImages = ["../IMAGES/indexBackground1.jpg", "../IMAGES/indexBackground2.jpg",
    "../IMAGES/indexBackground3.jpg"];


function applyRandomBackground() {
    let randomNum = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = "url(" + backgroundImages[randomNum] + ")";
}