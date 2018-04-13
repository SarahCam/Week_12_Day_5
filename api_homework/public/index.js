// Create XHR to 'get' JSON data from API (url)
// & fire a callback function once the data is loaded:
const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.addEventListener("load", callback)
  request.send();
};

// If the XHR is successful (200):
// (1) Convert the JSON string data into an object
// (2) Trigger data-dependent functions
const requestComplete = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  displayDropDown(countries);
  drawLine();
  drawChart(countries);
};

// Generate an HTML dropdown list from an array:
const displayDropDown = function(array){
  const select = document.getElementById('dropdown');
  for(let arrayItem of array){
    const option = document.createElement('option');
    option.value = arrayItem;
    option.innerText = arrayItem.name;
    select.appendChild(option);
    // countryArray.push(arrayItem);               // Add country to our countryArray
  }
};

// Main function:
const app = function(){
  const url = "https://restcountries.eu/rest/v2/all";
  makeRequest(url, requestComplete);
}

// Event listener, waits for page to load and then calls app() function:
window.addEventListener('DOMContentLoaded', app);
