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
        image2.src = "images/image00022-removebg-preview.png";
      });
      image2.addEventListener("mouseout", function () {
        image2.src = "images/image00028-removebg-preview.png";
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

  var thumbnails = Array.from(document.querySelectorAll("#thumbnails img"));
  var mainImage = document.querySelector("#main-image img");

  var mainImages = [
    "images/wetransfer_photos_2023-11-13_0759/image00045.jpg",
    "images/wetransfer_photos_2023-11-13_0759/image00037.jpg",
    "images/wetransfer_photos_2023-11-13_0759/image00048.jpg",
    "images/wetransfer_photos_2023-11-13_0759/image00049.jpg",
  ];

  console.log("Thumbnails:", thumbnails);
  console.log("Main image:", mainImage);

  thumbnails.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("click", function (event) {
      var newMainImage = mainImages[index];

      setTimeout(function () {
        mainImage.src = newMainImage;
        mainImage.style.transform = "";
      }, 500);

      console.log("Thumbnail clicked");
    });
  });

  // create a container for the colors that will be useed

  if (window.location.href.indexOf("buyWomen.html") > -1) {
    var colorContainer = document.getElementById("color-container");
    colorContainer.style.display = "flex";
    colorContainer.style.justifyContent = "center";
    colorContainer.style.padding = "1rem 0";

    var colors = ["#4053dd", "#cfcf26", "#dd4040"];

    for (var i = 0; i < 3; i++) {
      var color = document.createElement("div");
      color.style.backgroundColor = colors[i];
      color.style.width = "2rem";
      color.style.height = "2rem";
      color.style.borderRadius = "0.5rem";
      color.style.border = "none";
      color.style.margin = "0.5rem";
      colorContainer.appendChild(color);
    }
  }

  if (window.location.href.indexOf("buyWomen-1.html") > -1) {
    var colorContainer2 = document.getElementById("color-container2");
    colorContainer2.style.display = "flex";
    colorContainer2.style.justifyContent = "center";
    colorContainer2.style.padding = "1rem 0";

    var colors = ["#4053dd", "navy"];

    for (var i = 0; i < 2; i++) {
      var color = document.createElement("div");
      color.style.backgroundColor = colors[i];
      color.style.width = "2rem";
      color.style.height = "2rem";
      color.style.borderRadius = "0.5rem";
      color.style.border = "none";
      color.style.margin = "0.5rem";
      colorContainer2.appendChild(color);
    }
  }

  // Change image when thumbnail is clicked SECOND

  var thumbnails1 = Array.from(document.querySelectorAll("#thumbnails-1 img"));
  var mainImageSecond = document.querySelector("#main-imageSecond img");

  var mainImages1 = [
    "images/wetransfer_photos_2023-11-13_0759/image00002.jpg",
    "images/wetransfer_photos_2023-11-13_0759/image00005.jpg",
    "images/wetransfer_photos_2023-11-13_0759/image00003.jpg",
    "images/wetransfer_photos_2023-11-13_0759/image00024.jpg",
  ];

  console.log("Thumbnails-1:", thumbnails1);
  console.log("Main image-1:", mainImageSecond);

  thumbnails1.forEach(function (thumbnail, index) {
    thumbnail.addEventListener("click", function (event) {
      var newMainImage = mainImages1[index];

      setTimeout(function () {
        mainImageSecond.src = newMainImage;
        mainImageSecond.style.transform = "";
      }, 500);

      console.log("Thumbnail clicked");
    });
  });
});
