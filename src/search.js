export default function search(query) {
  let baseSearchUrl = "https://www.google.com/search?q=";
  let vendorlist = [
    "https://www.fairphone.com/en/",
    "https://www.ifixit.com/",
    "https://www.patagonia.com/",
    "https://www.tenthousandvillages.com/",
    "https://www.grove.co/",
    "https://www.seventhgeneration.com/",
    "https://agood.com/",
    "https://pelacase.com/",
    "https://www.drbronner.com/",
    "https://www.preserve.eco/",
    "https://numitea.com/",
    "https://www.allbirds.com/",
    "https://www.avocadogreenmattress.com/",
    "https://tablascreek.com/",
    "https://mudjeans.eu/",
    "https://www.toms.com/",
    "https://www.beyondmeat.com/en-US/",
    "https://www.greentoys.com/",
    "https://pelacase.com/",
    "https://yesstraws.com/",
    "https://nohbo.com/",
    "https://www.feedpetaluma.com",
    "https://aetherdiamonds.com/",
    "https://www.greatlengths.com",
    "https://www.coconutbowls.com",
    "https://boody.com/",
  ];

  vendorlist.forEach((url) => {
    let encodedQuery = encodeURIComponent(`site:${url} ${query}`);
    let queryURL = `${baseSearchUrl}${encodedQuery}`;
    let iframe = document.getElementById("searchResultsFrame");
    iframe.src = queryURL;

    ////console.log(queryURL);
    //let proxyUrl = `https://cors-anywhere.herokuapp.com/${queryURL}`;
    ////console.log(proxyUrl);
    //fetch(proxyUrl)
    //.then((response) => response.json())
    //.then((data) => {
    //const searchResults = data.items;
    //searchResults.forEach((result) => {
    ////console.log(result.title, result.link);
    //console.log(result);
    //});
    //})
    //.catch((error) => console.log(error));
  });
}
