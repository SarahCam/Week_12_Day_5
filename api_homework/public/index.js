// Key - Source : demographicsArray data.

// birth_rate	Worldbank
// capital_coordinates Wikipedia
// capital_name	Wikipedia
// death_rate	Worldbank
// diabetes_prevalence Worldbank
// economic_sectors	Fischer Weltalmanach
// education_expenditure Worldbank
// electric_energy_consumption Worldbank
// forest_area	Returns the total amount of forest area in a country (in km²)	Worldbank
// forest_area_percent	Returns the percentage of the land area covered by a forest for a country.	Worldbank
// gdp_total	Returns the total Gross Domestic Product (GDP) for a country (unit: USD).	Worldbank
// gdp_capita	Returns the Gross Domestic Product per person for a country (unit: USD).	Worldbank
// gini	Returns the Gini coefficient. Worldbank
// happiness_index	UNSDSN
// health_expenditure	Worldbank
// internetuser	Worldbank
// internetusers_percent Worldbank
// jobless_rate	Worldbank
// life_expectancy UN-Data
// literacy_rate Worldbank
// medianwage	Worldbank
// median_age	UN-Data
// migration UN-Data
// migration_rate	UN-Data
// military_expenditure	Worldbank
// mobile_cellular_subscriptions Worldbank
// murder_rate UNODC
// population	UN-Data
// population_0_14 Worldbank
// population_15_64	Worldbank
// population_over_64	Worldbank
// size	UN-Data
// urban_population	Worldbank


let demographicsArray = [];
let countriesArray = [];

let demographicsData = "population,murder_rate,migration,median_age,education_expenditure,density,population_over_64";

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
    countriesArray.push(arrayItem);
  }
};

const createDemographicsDropDown = function(array){
  const select = document.getElementById('demographics-dropdown');
  for(let arrayItem of array){
    const option = document.createElement('option');
    option.value = arrayItem;
    option.innerText = arrayItem.countryName;     // inqstats data
    select.appendChild(option);
    demographicsArray.push(arrayItem);
  }
};

// Create country method:
const createCountry = function(demographic){
  const countryName = document.getElementById('country-name');
  countryName.innerText = demographic.countryName;
  // const region = document.getElementById('region');
  // region.innerText = country.countryName;
  const population = document.getElementById('population');
  population.innerText = "Population: " + demographic.population;
  const murderRate = document.getElementById('murder-rate');
  murderRate.innerText = "Murder Rate: " + demographic.murder_rate;
  const medianAge = document.getElementById('median-age');
  medianAge.innerText = "Median Age: " + demographic.median_age;
};

// Main function:
const app = function(){

  const urlCountries = "https://restcountries.eu/rest/v2/all";
  makeRequest(urlCountries, createCountries);

  const urlDemographics = "http://inqstatsapi.inqubu.com/?api_key=8f4fe2162ce4d44d&cmd=getWorldData&data=" + demographicsData;
  makeRequest(urlDemographics, createDemographics);

  const select = document.getElementById('demographics-dropdown');
  select.addEventListener("change", function(event){
    console.log(event);
    console.log(event.target.selectedIndex);
    createCountry(demographicsArray[event.target.selectedIndex]);
  });

}

// Event listener, waits for page to load and then calls app() function:
window.addEventListener('DOMContentLoaded', app);
