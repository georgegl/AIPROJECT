window.onload = applyRandomBackground;

let backgroundImages = ["/AIPROJECT/IMAGES/indexBackground1.jpg", "/AIPROJECT/IMAGES/indexBackground2.jpg",
    "/AIPROJECT/IMAGES/indexBackground3.jpg"];

let triggerNotification = function () {

    let randomSelectedElementIndex = Math.floor(Math.random()*rawAllergyData.length);

    let notification = new Notification(`New allergy! ${rawAllergyData[randomSelectedElementIndex].title}`);
    notification.onclick = function () {
        window.open(`/AIPROJECT/HTML/notificationPage.html?allergy=${rawAllergyData[randomSelectedElementIndex].title}`);
    }
};

function applyRandomBackground() {
    let randomNum = Math.floor(Math.random() * backgroundImages.length);
    document.body.style.backgroundImage = "url(" + backgroundImages[randomNum] + ")";
}

async function startNotificationEngine() {
    setInterval(function () {
        if (Notification.permission === "granted") {
            triggerNotification();
        }
    }, 7000);
}

let rawAllergyData = [{
    "title": "pollen",
    "description": "polen alergy description",
    "treatment": "polen alergy treatment",
    "severity": "low",
    "cases": {
        "2004": 5343442,
        "2005": 4533448,
        "2006": 649692,
        "2007": 123414,
        "2008": 4254345,
        "2009": 7753442,
        "2010": 44562,
        "2011": 5465900,
        "2012": 3459914,
        "2013": 9243001,
        "2014": 4363399,
        "2015": 5400359,
        "2016": 592235,
        "2017": 5409122,
        "2018": 1229122
    },
    "season": "06-08"
},
    {
        "title": "dust",
        "description": "dust alergy description",
        "treatment": "dust alergy treatment",
        "severity": "medium",
        "cases": {
            "2004": 5343442,
            "2005": 6833448,
            "2006": 649692,
            "2007": 22346614,
            "2008": 42454345,
            "2009": 7753442,
            "2010": 4454462,
            "2011": 5465900,
            "2012": 34594914,
            "2013": 92434001,
            "2014": 43634399,
            "2015": 54005359,
            "2016": 59224235,
            "2017": 54091422,
            "2018": 12291322
        },
        "season": "undefined"
    },
    {
        "title": "lactose",
        "description": "lactose alergy description",
        "treatment": "lactose alergy treatment",
        "severity": "high",
        "cases": {
            "2004": 5343442,
            "2005": 6833448,
            "2006": 649692,
            "2007": 4765322,
            "2008": 4244345,
            "2009": 7753442,
            "2010": 4454462,
            "2011": 545900,
            "2012": 344914,
            "2013": 2543001,
            "2014": 4363391,
            "2015": 4005359,
            "2016": 5924235,
            "2017": 5491422,
            "2018": 162322
        },
        "season": "undefined"
    },
    {
        "title": "stings",
        "description": "stings alergy description",
        "treatment": "stings alergy treatment",
        "severity": "high",
        "cases": {
            "2004": 56343442,
            "2005": 6553458,
            "2006": 2549692,
            "2007": 5760322,
            "2008": 42540345,
            "2009": 1253442,
            "2010": 8757762,
            "2011": 3440574,
            "2012": 3494914,
            "2013": 2543001,
            "2014": 4363391,
            "2015": 22005359,
            "2016": 5924235,
            "2017": 5491422,
            "2018": 1262329
        },
        "season": "06-08"
    }
];