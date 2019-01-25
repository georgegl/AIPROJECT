window.onload = applyRandomBackground;

let backgroundImages = ["/AIPROJECT/IMAGES/indexBackground1.jpg", "/AIPROJECT/IMAGES/indexBackground2.jpg",
    "/AIPROJECT/IMAGES/indexBackground3.jpg"];

let triggerNotification = function () {
    let severityLevel = localStorage.getItem('severityFilter');
    let availableAllergies = getAllergiesBySeverityLevel(severityLevel);

    let randomSelectedElementIndex = Math.floor(Math.random()*availableAllergies.length);
    let notification = new Notification(`New allergy! ${availableAllergies[randomSelectedElementIndex].title}`);
    notification.onclick = function () {
        window.open(`/AIPROJECT/HTML/notificationPage.html?allergy=${availableAllergies[randomSelectedElementIndex].title}`);
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
    }, 10000);
}

function getAllergiesBySeverityLevel(severityLevel){
    let stringifiedData = JSON.stringify(rawAllergyData);
    let parsedData = JSON.parse(stringifiedData);

    if (severityLevel === null) {
        return parsedData;
    } else {
        return parsedData.filter(elem => elem.severity.toLowerCase() === severityLevel.toLowerCase());
    }
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
    "image": "/AIPROJECT/IMAGES/polen-image.png",
    "season": "06-08"
},
    {
        "title": "Dust Allergy",
        "description": "Home is supposed to be a comforting oasis, but for people with dust allergies the home can trigger uncomfortable symptoms. Oddly enough, allergy symptoms often worsen during or immediately after vacuuming, sweeping and dusting. The process of cleaning can stir up dust particles, making them easier to inhale.\n" +
        "\n" +
        "People with dust mite allergies often suffer the most inside their homes or in other people’s homes. Dust mites are microscopic organisms that feed off house dust and the moisture in the air. They are one of the most common indoor allergens, and symptoms can be present year-round. In addition to allergic rhinitis, dust mite allergy can also trigger asthma and cause eczema to flare. Use the Find an Allergist tool to find expert care for your dust allergies.",
        "treatment": "If you think you may have an allergy to any of the components of house dust, see an allergist. To pinpoint the cause of your symptoms, the allergist will ask detailed questions about your work and home environments, family medical history, frequency and severity of symptoms and exposure to pets and other possible triggers.\n" +
        "\n" +
        "Sometimes the medical interview will reveal a likely culprit—for instance, a girl who gets a stuffy nose every time she plays with a friend’s cat might have an allergy to cats or to the dust infused with cat hair in her friend’s house.\n" +
        "\n" +
        "Often an allergist will need to conduct a skin test to determine exactly what is triggering an allergic reaction.\n" +
        "\n" +
        "Skin tests involve using a small, sterile probe to prick the skin with extracts from common allergens, such as tree pollen and pet dander, and observing the reaction. A positive reaction (a raised welt with redness around it) may indicate that you are allergic to that substance. Occasionally, your allergist may order a blood test and a skin test to confirm an allergy.",
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
        "image": "/AIPROJECT/IMAGES/dustallergy.jpg",
        "season": "undefined"
    },
    {
        "title": "Lactose Allergy",
        "description": "Lactose intolerance involves the digestive system: If you have it, your body doesn’t make lactase, the enzyme needed to digest lactose. That’s the sugar in milk. Instead of digesting normally in your stomach and small intestine, undigested lactose moves into your colon, where it’s broken down by bacteria and causes bloating and gas. It can be uncomfortable, but it’s not dangerous.\n" +
        "\n" +
        "Lactose intolerance is common in adults – about 30 million Americans have it by age 20. It’s more common in people with Asian, African or Native American heritage and less common in people with a northern or western European background.",
        "treatment": "Get Enough Calcium\n" +
        "\n" +
        "If you limit milk and other dairy products, you may not get enough calcium and vitamin D. Talk to your doctor about taking calcium supplements with vitamin D and eating calcium-rich foods, such as leafy greens, broccoli, and some seafood like salmon.",
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
        "image": "/AIPROJECT/IMAGES/lactoseallergy.jpg",
        "season": "undefined"
    },
    {
        "title": "Stings Allergy",
        "description": "It’s more common to fear an insect sting than to actually be allergic to one. An allergist is an expert who can explain the difference between an allergic reaction and a normal reaction, thus reducing anxiety and preventing unnecessary medical expense.\n" +
        "\n" +
        "Thousands of people enter hospital emergency rooms or urgent care clinics every year suffering from insect stings. It has been estimated that potentially life-threatening allergic reactions occur in 0.4% – 0.8% of children and 3% of adults. At least 90 – 100 deaths per year result from insect sting anaphylaxis.",
        "treatment": "Injectable epinephrine for self-administration is often prescribed as emergency rescue medication for treating an allergic reaction. People who have had previous allergic reactions and rely on epinephrine must remember to carry it with them at all times. Also, because one dose may not be enough to reverse the reaction, recent guidelines recommend keeping two doses of injectable epinephrine available and to activate emergency medical services if used. Even if symptoms improve after a single dose of epinephrine, immediate medical attention following an insect sting is recommended.",
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
        "image": "/AIPROJECT/IMAGES/stingsallergy.png",
        "season": "06-08"
    }
];