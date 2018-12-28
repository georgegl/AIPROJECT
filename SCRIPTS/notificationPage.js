let main = async function () {
    startNotificationEngine();

    let el = document.body.querySelector(".allergy-list");
    var stringifiedData = JSON.stringify(rawAllergyData);
    let parsedData = JSON.parse(stringifiedData);

    if(location.search.split('=')[1]!== undefined){
        let requestedAllergy = location.search.split('=')[1];
        let filteredList = parsedData.filter(elem=>elem.title.includes(requestedAllergy));
        parsedData = filteredList;
    }

    let allergyElementList = `${parsedData.map(item => `<article class="allergyelement"><h2>&emsp;${item.title}</h2><img alt="Polen Image" class="responsive-image" src="/AIPROJECT/IMAGES/polen-image.png"><h3>&emsp;Allergy description</h3><p>&emsp;${item.description}</p><h3>&emsp;Allergy treatment</h3><p>&emsp;${item.treatment}</article>
</p>`)}`;
    el.innerHTML = allergyElementList;
};

document.addEventListener("DOMContentLoaded", main());




