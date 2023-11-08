import Fuse from "fuse.js";

document.getElementById("search").addEventListener("click", function () {
  document.getElementById("searchForm").style.display = "block";
});

// List of words to search
var list = [
  "MEN",
  "WOMEN",
  "SPRING/SUMMER COLLECTION 2024",
  "KANYE KRAZY COLLECTION 2023",
  "CONTACT",
  "ACCOUNT",
];

// Options for Fuse.js
var options = {
  shouldSort: true,
  threshold: 0.4,
  maxPatternLength: 32,
};

var colors = ["#bdbdbd", "#bdbdbd", "#bdbdbd"];

var fuse = new Fuse(list, options);

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    console.log(
      "Search bar display value:",
      document.getElementById("searchForm").style.display
    );

    var searchTerm = document.getElementById("searchTerm").value;
    var result = fuse.search(searchTerm);
    var resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = "";
    if (result.length === 0) {
      alert("The word is not available");
    } else {
      result.forEach(function (match, index) {
        var resultDiv = document.createElement("div");
        resultDiv.textContent = match.item;
        resultDiv.style.margin = "10px";
        resultDiv.style.borderRadius = "1rem";
        resultDiv.style.paddingTop = "10px";
        resultDiv.style.height = "40px";
        resultDiv.style.cursor = "pointer";

        resultDiv.onmouseover = function () {
          resultDiv.style.backgroundColor = "#bdbdbd";
        };
        resultDiv.onmouseout = function () {
          resultDiv.style.backgroundColor = "";
        };

        resultsContainer.appendChild(resultDiv);
      });

      window.location.hash = searchTerm;
    }
  });

document.getElementById("search").addEventListener("click", function (event) {
  var searchBar = document.getElementById("searchBar");
  var searchForm = document.getElementById("searchForm");
  var searchLi = document.getElementById("search");
  var searchTerm = document.getElementById("searchTerm");

  if (
    searchForm.style.display === "flex" &&
    searchTerm.value.trim() === "" &&
    event.type !== "submit"
  ) {
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

// Mouse over event
