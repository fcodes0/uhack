import search from "./search.js";
const searchBar = document.getElementById("search-bar");
const resultsList = document.getElementById("results");

function displayResults(results) {
  resultsList.innerHTML = "";
  results.forEach((result) => {
    const listItemElement = document.createElement("li");

    const linkElement = document.createElement("a");
    linkElement.href = result.link;
    linkElement.innerText = result.title;

    const bioElement = document.createElement("p");
    bioElement.innerText = result.bio;

    listItemElement.appendChild(linkElement);
    listItemElement.appendChild(bioElement);

    resultsList.appendChild(listItemElement);
  });
}

const searchButton = document.getElementById("logo-button");

searchButton.addEventListener("click", function () {
  const query = document.getElementById("search-bar").value;
  search(query);
});
