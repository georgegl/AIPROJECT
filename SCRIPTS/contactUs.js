const successFormSubmit = "<p>Your message has been submitted successfully! Please wait kindly for us to process the message!</p>";
const currentFilterMessage = "Current filter: ";


let main = async function(){
    startNotificationEngine();
    displayCurrentFilter();

};

async function displayCurrentFilter(){
    let filterFromLocalStorage = localStorage.getItem('severityFilter');
    let finalMessage = "";
    if (filterFromLocalStorage === null){
        finalMessage = currentFilterMessage + "No filter selected."
    } else {
        finalMessage = currentFilterMessage + filterFromLocalStorage
    }
    displayFilterMessage(finalMessage);
}

function displayFilterMessage(message){
    let currentStatus = document.getElementById("current-filter");
    currentStatus.innerHTML = message;
}


function successSubmit(){
    let formElement = document.body.querySelector("div.contact-container");
    formElement.innerHTML = successFormSubmit;
}


function setSeverityFilter(){
    let filter_value = document.getElementById('severity-level').value;
    if (filter_value !== "default") {
        if (filter_value === "Reset") {
            localStorage.removeItem('severityFilter')
        } else {
            localStorage.setItem('severityFilter', filter_value);
        }
    }
}



document.addEventListener("DOMContentLoaded", main());
