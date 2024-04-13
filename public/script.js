function calculateCycle() {
    let startDate = new Date(document.getElementById("start-date").value);
    let endDate = new Date(document.getElementById("end-date").value);
  
    let cycleLength = [
      24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38,
    ];
  
    let randomCycleLengthIndex = Math.floor(Math.random() * cycleLength.length);
  
    let selectedCycleLength = cycleLength[randomCycleLengthIndex];
  
    let nextStartDate = new Date(
      endDate.getTime() + selectedCycleLength * 24 * 60 * 60 * 1000,
    );
  
    let nextEndDate = new Date(nextStartDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  
    let ovulationDay = new Date(nextStartDate);
    ovulationDay.setDate(ovulationDay.getDate() - 14);
  
    let mood = document.getElementById("mood").value;
    let cramps = parseInt(document.getElementById("cramps").value);
    let cravings = document.getElementById("cravings").value;
    let energy = parseInt(document.getElementById("energy").value);
    let bloodCollectionMethod = document.getElementById("blood-collection").value;
  
    let predictionHTML = "<h2>Predicted Next Cycle:</h2>";
    predictionHTML += "<p>Start Date: " + nextStartDate.toDateString() + "</p>";
    predictionHTML += "<p>End Date: " + nextEndDate.toDateString() + "</p>";
    predictionHTML += "<p>Ovulation Day: " + ovulationDay.toDateString() + "</p>";
    predictionHTML += "<h2>Symptoms:</h2>";
    predictionHTML += "<p>Mood: " + mood + "</p>";
    predictionHTML += "<p>Cramps: " + cramps + "</p>";
    predictionHTML += "<p>Cravings: " + cravings + "</p>";
    predictionHTML += "<p>Energy Level: " + energy + "</p>";
    predictionHTML +=
      "<p>Blood Collection Method: " + bloodCollectionMethod + "</p>";
  
    document.getElementById("prediction").innerHTML = predictionHTML;
  }
  
  function navigateToFactsPage() {
    window.location.href = "facts.html";
  }
  
  function navigateToTracker() {
    window.location.href = "ind.html";
  }
  
  function navigateToHomepage() {
    window.location.href = "homepage.html";
  }
  
  function navigateToForum() {
    window.location.href = "forum.html";
  }
  
  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    let a = event.target;
    let text = a.text;
    let url = a.href;
    history.pushState({ title: text, url: url }, null, a.href);
    navigate(text, url);
  }
  
  function navigate(title, url) {
    if (url === "facts.html") {
      window.location.href = url;
    } else {
      console.log("Navigating to:", title, url);
    }
  }
  
  const menu = document.querySelector("#menu");
  menu.addEventListener("click", handleClick, false);
  
  function handleBack(event) {
    if (event.state == null) {
      navigate("Web APIs", null);
    } else {
      navigate(event.state.title, event.state.url);
    }
  }
  
  window.addEventListener("popstate", handleBack);
  
  
  
  