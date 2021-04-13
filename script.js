var inputTxt = document.getElementById("inputTxt");
var translateBtn = document.getElementById("translateBtn");
var outputTxt = document.getElementById("outputTxt");
var fetchURL = "https://api.funtranslations.com/translate/minion.json";
function fetchingTranslator() {
  fetchURL = fetchURL + "?text=" + inputTxt.value;
  fetch(fetchURL)
    .then((response) => response.json())
    .then((json) => {
      var translatedTxt = json.contents.translated;
      outputTxt.innerHTML(translatedTxt);
    })
    .catch((err) => console.error("Server Not Responding..."));
}

translateBtn.addEventListener("click", fetchingTranslator);
