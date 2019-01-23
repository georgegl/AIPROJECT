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
    }, 60000);
}

let rawAllergyData = [{
    "title": "Pollen Allergy",
    "description": "Pollen is one of the most common causes of allergies in the United States.\n" +
    "\n" +
    "Pollen is a very fine powder produced by trees, flowers, grasses, and weeds to fertilize other plants of the same species. Many people have an adverse immune response when they breathe in pollen.\n" +
    "\n" +
    "The immune system normally defends the body against harmful invaders — such as viruses and bacteria — to ward off illnesses.\n" +
    "\n" +
    "In people with pollen allergies, the immune system mistakenly identifies the harmless pollen as a dangerous intruder. It begins to produce chemicals to fight against the pollen.",
    "treatment": "One key tip is to get ahead of pollen season. For example, if your symptoms are typically at their worst in mid-April, start taking your medications at the end of March. Likewise, if the weather calls for a run of warm weather toward the end of winter, it might be smart to begin taking your medication at that time as well. Ask your allergist about medications that can be taken in advance of pollen season.\n" +
    "\n" +
    "Two immunotherapy options are available for those with severe pollen allergies:\n" +
    "\n" +
    "Allergy shots can help your body build resistance to pollens.\n" +
    "Tablets that dissolve under the tongue are now available by prescription for people suffering from grass and ragweed allergies. These medications must be started 12 weeks before symptoms are expected to begin.",
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