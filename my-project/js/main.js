document.getElementById("search").addEventListener("click", function () {
  document.getElementById("searchForm").style.display = "block";
});

// List of words to search
var list = [
  "MEN",
  "WOMEN",
  "SPRING/SUMMER COLLECTION 2024",
  "KANYE KRAZY DENIM",
  "CONTACT",
  "ACCOUNT",
];

// Options for Fuse.js
var options = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
};

var fuse = new Fuse(list, options);

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var searchTerm = document.getElementById("searchTerm").value;
    var result = fuse.search(searchTerm);
    var resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";
    if (result.length === 0) {
      alert("The word is not available");
    } else {
      result.forEach(function (match) {
        var resultDiv = document.createElement("div");
        resultDiv.textContent = match.item;
        resultsContainer.appendChild(resultDiv);
      });
    }
  });

document.getElementById("search").addEventListener("click", function () {
  var searchBar = document.getElementById("searchBar");
  var searchForm = document.getElementById("searchForm");
  var searchLi = document.getElementById("search");
  var searchTerm = document.getElementById("searchTerm");

  if (searchForm.style.display === "flex" && searchTerm.value === "") {
    searchBar.style.display = "none";
    searchForm.style.display = "none";
    searchLi.classList.remove("active");
  } else {
    searchBar.style.display = "flex";
    searchForm.style.display = "flex";
    searchForm.style.width = "100vw";
    searchForm.style.margin = "0";
    searchLi.classList.add("active");
  }
});

document.getElementById("buttonId").addEventListener("click", function () {
  var searchBar = document.getElementById("searchBar");
  var searchLi = document.getElementById("search");
  searchBar.style.display = "none";
  searchLi.classList.remove("active");
});
