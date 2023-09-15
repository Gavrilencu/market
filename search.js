let result = document.getElementById("searchResults");
function searchPage() {
  var searchTerm = document.getElementById("searchInput").value;

  var pageContent = document.body.textContent || document.body.innerText;

  var regex = new RegExp(searchTerm, "gi");
  var matches = pageContent.match(regex);

  var searchResults = document.getElementById("searchResults");
  searchResults.innerHTML = "";

  if (matches) {
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i];
      var matchElement = document.createElement("p");
      matchElement.textContent = match;
      searchResults.appendChild(matchElement);
    }
  } else {
    searchResults.textContent = "Niciun rezultat găsit.";
    result.style.display = "flex";
  }
}
searchPage();
