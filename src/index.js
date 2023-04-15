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

search("laptop");
const searchButton = document.getElementById("search-bar");

searchButton.addEventListener("click", function () {
  const query = document.getElementById("search-bar").value;
});
//searchBar.addEventListener("input", () => {
//const searchTerm = searchBar.value.toLowecrCase().trim();
//fetch("links.csv")
//.then((response) => response.text())
//.then((data) => {
//const rows = data.trim().split("\n");
//const headers = rows.shift().split(",");
//const filteredPages = rows
//.map((row) => {
//const values = row.split(",");
//return {
//title: values[0].trim(),
//link: values[1].trim(),
//bio: values[2].trim(),
//};
//})
//.filter((page) => {
//const titleMatches = page.title.toLowerCase().includes(searchTerm);
//const bioMatches = page.bio.toLowerCase().includes(searchTerm);
//return titleMatches || bioMatches;
//});
//displayResults(filteredPages);
//})
//.catch((error) => console.error("Error reading links file:", error));
//});
