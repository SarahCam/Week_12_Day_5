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
const createCountries = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const countries = JSON.parse(jsonString);
  createCountriesDropDown(countries);
  drawChart(countries);
};

const createDemographics = function(){
  if(this.status !== 200) return;
  const jsonString = this.responseText;
  const demographics = JSON.parse(jsonString);
  createDemographicsDropDown(demographics);
  drawLine();
};

// Generate an HTML dropdown list from an array:
const createCountriesDropDown = function(array){
  const select = document.getElementById('dropdown');
  for(let arrayItem of array){
    const option = document.createElement('option');
    option.value = arrayItem;
    option.innerText = arrayItem.name;            // restcountries data
    select.appendChild(option);
 // countryArray.push(arrayItem);                 // Add country to our countryArray
  }
};

const createDemographicsDropDown = function(array){
  console.log("HIYA");
  const select = document.getElementById('demographics-dropdown');
  for(let arrayItem of array){
    console.log("HIYA 2", arrayItem);
    const option = document.createElement('option');
    option.value = arrayItem;
    option.innerText = arrayItem.countryName;     // inqstats data
    select.appendChild(option);
 // demoArray.push(arrayItem);                    // Add country to our countryArray
  }
};

// Main function:
const app = function(){

  const urlCountries = "https://restcountries.eu/rest/v2/all";
  makeRequest(urlCountries, createCountries);

  // http://blog.inqubu.com/inqstats: open-api-published-to-get-demographic-data
  const urlDemographics = "http://inqstatsapi.inqubu.com/?api_key=8f4fe2162ce4d44d&cmd=getWorldData&data=population,murder_rate,migration,median_age,education_expenditure,density,population_over_64";
  makeRequest(urlDemographics, createDemographics);

}

// Event listener, waits for page to load and then calls app() function:
window.addEventListener('DOMContentLoaded', app);
