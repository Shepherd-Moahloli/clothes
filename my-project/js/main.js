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
  searchForm.style.display = "flex";
  searchForm.style.width = "100vw";
});
