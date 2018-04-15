let demographicsArray = [];
let countriesArray = [];

const demographicOptions = [
  { key: "birth_rate", value: "Birth Rate"},
  { key: "death_rate", value: "Death Rate"},
  { key: "diabetes_prevalence", value: "Diabetes Prevalence"},
  { key: "electric_energy_consumption", value: "Electric Energy Consumption"},
  { key: "gdp_capita", value: "GDP Per Capita"},
  { key: "gini", value: "GINI"},
  { key: "happiness_index", value: "Happiness Index"},
  { key: "jobless_rate", value: "Jobless Rate"},
  { key: "life_expectancy", value: "Life Expectancy"},
  { key: "literacy_rate", value: "Literacy Rate"},
  { key: "medianwage", value: "Median Wage"},
  { key: "median_age", value: "Median Age"},
  { key: "migration_rate", value: "Migration Rate"},
  { key: "murder_rate", value: "Murder Rate"},
  { key: "population", value: "Population"},
  { key: "population_0_14", value: "Population 0-14 Years"},
  { key: "population_15_64", value: "Population 15-64 Years"},
  { key: "population_over_64", value: "Population Over 64 Years"},
  { key: "size", value: "Size"},
  { key: "urban_population", value: "Urban Population"}
];

// Create a comma-separated string of demographic keys, that can be appended to the demographics URL:
const getDemographicsData = function(){
  let demographicsData = "";
  let lastIndex = (demographicOptions.length - 1);
  for(i=0; i < lastIndex; i++){
    demographicsData = demographicsData + demographicOptions[i].key + ",";
  };
  demographicsData = demographicsData + demographicOptions[lastIndex].key;
  return demographicsData;
};

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
  createDemographicsResults(demographics);
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

// Generate the demographics results for the selected country:
const createDemographicsResults = function(demographics){
  const select = document.getElementById('demographics-dropdown');
  select.addEventListener("change", function(event){
    let country = demographics[event.target.selectedIndex];
    createCountry(country);

    drawGenericPieChart('Rural/Urban Population',
                        [ ['Urban/Rural', 'Percentage'],
                          ['Urban', parseFloat(country.urban_population)],
                          ['Rural', 100 - country.urban_population]
                        ],
                        'piechart-test1');

    drawGenericPieChart('Literacy Level',
                        [ ['Literacy', 'Percentage'],
                          ['Literate', parseFloat(country.literacy_rate)],
                          ['Illiterate', 100 - country.literacy_rate]
                        ],
                        'piechart-test2');

    drawGenericPieChart('Population Age',
                        [ ['Age', 'Percentage'],
                          ['Under 15', parseFloat(country.population_0_14)],
                          ['15 - 64 Years', parseFloat(country.population_15_64)],
                          ['Over 64', parseFloat(country.population_over_64)]
                        ],
                        'piechart-test3');
  });
}

// Create & populate country demographics:
const createCountry = function(country){
  const div = document.getElementById('demographics');

  const h2 = document.getElementById('country-name');
  h2.innerText = country.countryName;

  for(option of demographicOptions){
      const p = document.getElementById(option.key);
      const value = country[option.key];        // Don't use const value = eval("country." + option.key)
      p.innerText = option.value + ": " + value;
  };
};

// Main function:
const app = function(){

  const urlCountries = "https://restcountries.eu/rest/v2/all";
  makeRequest(urlCountries, createCountries);

  const urlDemographics = "http://inqstatsapi.inqubu.com/?api_key=8f4fe2162ce4d44d&cmd=getWorldData&data="
                          + getDemographicsData();
  makeRequest(urlDemographics, createDemographics);

}

// Event listener, waits for page to load and then calls app() function:
window.addEventListener('DOMContentLoaded', app);
