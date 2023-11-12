import Fuse from "https://cdn.skypack.dev/fuse.js";

document.addEventListener("DOMContentLoaded", function () {
  // Mouse over event change image

  var image2 = document.querySelector(".flex-container li:nth-child(2) img");
  var image3 = document.querySelector(".flex-container li:nth-child(3) img");
  var image4 = document.querySelector(".flex-container li:nth-child(4) img");

  if (window.location.pathname.endsWith("women.html")) {
    var image1 = document.querySelector(".flex-container li:nth-child(1) img");

    if (image1) {
      image1.addEventListener("mouseover", function () {
        image1.src = "images/image00007-removebg-preview.png";
      });
      image1.addEventListener("mouseout", function () {
        image1.src = "images/image00010-removebg-preview.png";
      });
    } else {
      console.log("No element matched by .flex-container li:nth-child(1) img");
    }
  }

  if (window.location.pathname.endsWith("women.html")) {
    if (image2) {
      image2.addEventListener("mouseover", function () {
        image2.src = "images/image00042-removebg-preview.png";
      });
      image2.addEventListener("mouseout", function () {
        image2.src = "images/image00046-removebg-preview.png";
      });
    } else {
      console.log("No element matched by .flex-container li:nth-child(2) img");
    }
  }

  if (window.location.pathname.endsWith("women.html")) {
    if (image3) {
      image3.addEventListener("mouseover", function () {
        image3.src = "images/image00007-removebg-preview.png";
      });
      image3.addEventListener("mouseout", function () {
        image3.src = "images/image00010-removebg-preview.png";
      });
    } else {
      console.log("No element matched by .flex-container li:nth-child(3) img");
    }
  }

  if (window.location.pathname.endsWith("women.html")) {
    if (image4) {
      image4.addEventListener("mouseover", function () {
        image4.src = "images/image00042-removebg-preview.png";
      });

      image4.addEventListener("mouseout", function () {
        image4.src = "images/image00046-removebg-preview.png";
      });
    } else {
      console.log("No element matched by .flex-container li:nth-child(4) img");
    }
  }

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

  // Scroll event so that it can change styling when I scroll

  window.addEventListener("scroll", function () {
    const mainImage = document.querySelector("#main-image img");
    const scrollPosition = window.scrollY;
    const imageHeight = mainImage.offsetHeight;

    if (scrollPosition <= imageHeight) {
      console.log(mainImage.offsetHeight);
      const opacity = scrollPosition / imageHeight;
      mainImage.style.opacity = opacity;
    } else {
      mainImage.style.opacity = 1;
    }
  });

  // Change image when thumbnail is clicked

  var thumbnails = Array.from(document.querySelectorAll(".thumbnails img"));
  var mainImage = document.querySelector("#main-image img");

  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("click", function (event) {
      mainImage.src = event.target.src;
    });
  });
});
