let result = document.getElementById("searchResults");
function searchPage() {
  // Obțineți valoarea introdusă în inputul de căutare
  var searchTerm = document.getElementById("searchInput").value;

  // Obțineți conținutul paginii în care doriți să căutați (puteți folosi document.body pentru întreaga pagină)
  var pageContent = document.body.textContent || document.body.innerText;

  // Folosiți o expresie regulată pentru a căuta termenul pe pagină
  var regex = new RegExp(searchTerm, "gi");
  var matches = pageContent.match(regex);

  // Afișați rezultatele
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
