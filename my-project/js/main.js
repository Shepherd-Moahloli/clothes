document.getElementById("search").addEventListener("click", function () {
  document.getElementById("searchForm").style.display = "block";
});

document
  .getElementById("searchForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var searchTerm = document.getElementById("searchTerm").value;
    if (searchTerm !== "available") {
      alert("The word is not available");
    }
  });

document.getElementById("search").addEventListener("click", function () {
  var searchForm = document.getElementById("searchForm");
  var searchLi = document.getElementById("search");

  if (searchForm.style.display === "flex") {
    searchForm.style.display = "none";
    searchLi.classList.remove("active");
  } else {
    searchForm.style.display = "flex";
    searchForm.style.width = "100vw";
    searchForm.style.margin = "0";
    searchLi.classList.add("active");
  }
});

document.getElementById("search").addEventListener("click", function () {
  var searchBar = document.getElementById("searchBar");
  var searchLi = document.getElementById("search");

  if (searchBar.style.display === "none") {
    searchBar.style.display = "flex";
    searchLi.classList.add("active");
  } else {
    searchBar.style.display = "none";
    searchLi.classList.remove("active");
  }
});

document.getElementById("buttonId").addEventListener("click", function () {
  var searchBar = document.getElementById("searchBar");
  var searchLi = document.getElementById("search");
  searchBar.style.display = "none";
  searchLi.classList.remove("active");
});
