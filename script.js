var inputTxt = document.getElementById("inputTxt");
var translateBtn = document.getElementById("translateBtn");
var outputTxt = document.getElementById("outputTxt");
var fetchURL = "https://api.funtranslations.com/translate/minion.json";
function fetchingTranslator() {
  fetchURL = fetchURL + "?text=" + inputTxt.value;
  fetch(fetchURL)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.contents.translated);
      var translatedTxt = json.contents.translated;
      outputTxt.innerText = translatedTxt;
    })
    .catch((e) => console.log("Error: " + e));
  fetchURL = "https://api.funtranslations.com/translate/minion.json";
}

translateBtn.addEventListener("click", fetchingTranslator);
