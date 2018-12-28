const successFormSubmit = "<p>Your message has been submitted successfully! Please wait kindly for us to process the message!</p>";

let main = async function(){
    startNotificationEngine();
};

function successSubmit(){
    let formElement = document.body.querySelector("div.container");
    formElement.innerHTML = successFormSubmit;
}


document.addEventListener("DOMContentLoaded", main());
