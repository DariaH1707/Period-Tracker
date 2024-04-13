let factsData = [
    "The average menstrual cycle lasts about 28 days.",
    "The first day of your period marks the beginning of your menstrual cycle.",
    "The menstrual cycle can vary in length from person to person and even from month to month.",
    "Period blood is made up of blood, tissue from the lining of the uterus, and mucus.",
    "Menstrual cramps are caused by the uterus contracting to shed its lining.",
    "It's normal to have some irregularities in your menstrual cycle, especially during puberty and menopause.",
    "Exercise and a healthy diet can help alleviate menstrual symptoms for some people.",
    "Premenstrual Syndrome (PMS) refers to a variety of symptoms that can occur in the week or two before a person's period.",
    "Periods are a natural and healthy part of life, and there's no reason to feel ashamed or embarrassed about them."
];

function displayFacts() {
    let factsContainer = document.getElementById("facts");
    let randomFactIndex = Math.floor(Math.random() * factsData.length);
    let randomFact = factsData[randomFactIndex];
    factsContainer.innerHTML = "<p>" + randomFact + "</p>";
}

window.onload = displayFacts;
