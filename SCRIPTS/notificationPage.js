let main = async function () {
    startNotificationEngine();

    let el = document.body.querySelector(".allergy-list");
    var stringifiedData = JSON.stringify(rawAllergyData);
    let parsedData = JSON.parse(stringifiedData);

    if (location.search.split('=')[1] !== undefined) {
        let requestedAllergy = location.search.split('=')[1];
        let filteredList = parsedData.filter(elem => elem.title.includes(requestedAllergy));
        parsedData = filteredList;
    }

    let allergyElementList = `${parsedData.map(item => `<article class="allergyelement"><button id="chartButton-${item.title}"><img src="/AIPROJECT/IMAGES/chart-icon-color.png" alt="chartSymbol" class="chart"></button><div id="chartDiv-${item.title}"></div><h2>&emsp;${item.title}</h2><img alt="Polen Image" class="responsive-image" src="/AIPROJECT/IMAGES/polen-image.png"><h3>&emsp;Allergy description</h3><p>&emsp;${item.description}</p><h3>&emsp;Allergy treatment</h3><p>&emsp;${item.treatment}</p><div class="fb-share-button" data-href="http://localhost:63342/AIPROJECT/HTML/notificationPage.html?allergy=${item.title}" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Flocalhost%3A63342%2FAIPROJECT%2FHTML%2FnotificationPage.html%3Fallergy%3D${item.title}&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></div></article>`)}`;
    el.innerHTML = allergyElementList;

    for (let i = 0; i < parsedData.length; i++) {
        let xValues = Object.keys(parsedData[i].cases);
        let yValues = Object.values(parsedData[i].cases);

        let trace = {
            x: xValues,
            y: yValues,
            mode: 'lines+markers',
            type: 'bar',
        };

        let layout = {
            title: parsedData[i].title.toUpperCase() + ' ALLERGY (CASES PER YEAR)',
            showlegend: false
        };

        let data = [trace];

        (function () {

            let chartButton = document.getElementById(`chartButton-${parsedData[i].title}`);
            let chartDiv = document.getElementById(`chartDiv-${parsedData[i].title}`);
            let clicked = false;

            chartButton.addEventListener(`click`, function (event) {

                if (clicked === false) {
                    clicked = true;
                    Plotly.newPlot(`chartDiv-${parsedData[i].title}`, data, layout);
                }
                else {
                    clicked = false;
                    Plotly.purge(`chartDiv-${parsedData[i].title}`);
                }
            }, false);
        })();

    }

};

document.addEventListener("DOMContentLoaded", main());




