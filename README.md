# Week_12_Day_5

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



Step 1: Get an API key
----------------------

Step 2: Make requests
---------------------

The API is accessible via REST interface. The following parameters can be passed in the request:
Key	Description	Cardinality

api_key
-------
This is a mandatory value. It must be provided with every request. Please fill in the form above to get your personal API key.	1

data
----
A list of data keys that should be returned, separated by commas without spaces (please see list below to get an overview about all available data keys).	1...*

countries
---------
A list of countries for which data should be returned. Please use the ISO 3166-1 alpha-2 format for countries separated by commas without spaces (e.g. us = United States, de = Germany, etc). Instead of a country code, you can also use one of the following region identifier to return a list of countries, that belong to that region: africa, america, asia, europe, oceania.	1...*

years
-----
Optional. It can be used to get data from a specific year. If this parameter is not set, the five most up to date values are returned. Use a comma separated list to get data from several years (e.g. years=2011,2012,2013), you can also set a range (e.g. years=2011:2013 which will return all data between 2011 and 2013 if available)	0...*
lang	Optional. States, in which language values are returned. Available options are: en (English; default), de (German), es (Spanish), pt (Portuguese), fr (French), it (Italian), ru (Russian), zh (Chinese).	0...1

Subsequently, a list of all available data keys is given:
--------------------------------------------------------
Key	                  - Description	- Source
--------------------------------------------
bigmac_index	       - Returns the price for a Big Mac by McDonald's derived from www.bigmacindex.org (unit: USD).	- www.bigmacindex.org
birth_rate	         - The average number of birth per year per 1,000 population.	 - Worldbank
capital_coordinates	 - Returns the geographic coordinates (latitude, longitude) of the capital of the given countries.	- Wikipedia
capital_name	       - Returns the name of the capital of the given countries. Use the language parameter (lang) to return the capital in one of the supported languages.	- Wikipedia
co2_emissions	       - Returns the CO2 emissions in metric tons per person per year.	- Global Carbon Atlas
corruption_index	   - Returns the Corruption Perceptions Index (CPI) published by www.transparency.org (scale: 0-100; 0 = high corruption. 100 = low corruption)	 - www.transparency.org
density	             - Returns the population density of a country (per km²).	 -
death_rate	         - The average number of death per year per 1,000 population.	 - Worldbank
debts	               - The total amount of government borrowings (unit: USD). -	Worldbank
debts_capita	       - The amount of government borrowings per person (unit: USD).	- Worldbank
debts_percent	       - The percentage of government borrowings in relation to the GDP.	- Worldbank
diabetes_prevalence  - The percentage of people ages 20-79 who have type 1 or type 2 diabetes.	- Worldbank
economic_sectors	   - Returns the fraction of the three economic sectors (agriculture = primary, industry = secondary, service = tertiary) of the total economic performance.	 - Fischer Weltalmanach
education_expenditure  - Returns the public expenditure on education (in % of the GDP for a country).	- Worldbank
electric_energy_consumption	- Returns the amount of electric energy consumed (in kWh/capita)	- Worldbank
fifa	               - Returns the ranking of a country in the FIFA football ranking board.	 - www.fifa.com
first_marriage_men	 - Returns the age of first marriage for men.	 - Worldbank
first_marriage_women	- Returns the age of first marriage for women.	- Worldbank
fixed_telephone_subscriptions	 - Returns the number of landline phone subscriptions (per 100 population)	- Worldbank
forest_area	         - Returns the total amount of forest area in a country (in km²)	- Worldbank
forest_area_percent	 - Returns the percentage of the land area covered by a forest for a country.	 - Worldbank
gdp_total	           - Returns the total Gross Domestic Product (GDP) for a country (unit: USD).	- Worldbank
gdp_capita	         - Returns the Gross Domestic Product per person for a country (unit: USD).	 - Worldbank
gini	               - Returns the Gini coefficient. The Gini coefficient states how uniformly assets are distributed in a country (scale: 0-100; 0 = equal distribution. 100 = unequal distribution)	 - Worldbank
happiness_index	    - Returns the values of the world happiness survey of the UNSDSN. The higher the value, the happier the country.	- UNSDSN
hdi	                - Returns the Human Development Index (HDI). It is published by the United Nations and combines several parameters (e.g. life expectancy or GDP). Scale: 0-1; 0 = low development. 1 = high development.	- UN-Data
health_expenditure	- Returns the public expenditure on health (in % of the GDP for a country).	 - Worldbank
hiv_prevalence	    - The percentage of people ages 15-49 who are infected with HIV	 - Worldbank
inflation	          - Returns the annual change of consumer prices (unit: %).	 - Worldbank
internetuser	      - Returns the total number of people that are actively using the internet.	- Worldbank
internetusers_percent	 - Returns the percentage of people, that are actively using the internet for a country.	- Worldbank
jobless_rate	      - The number of unemployed people in relation to the labor force for a country.	 - Worldbank
life_expectancy	    - The average number of years a person will live (at birth).	- UN-Data
literacy_rate	      - Returns the percentage of people, that have the ability to read and write by the age of 15.	 - Worldbank
medianwage	        - Returns the median monthly wage before taxes including public benefits (e.g child allowance); unit: USD.	- Worldbank
median_age	        - The median age of the population.	 - UN-Data
migration	          - Returns the total number of people that emigrated or immigrated.	- UN-Data
migration_rate	    - Returns the net migration rate (per 1,000 population).	- UN-Data
military_expenditure	- Returns the military budget (in % of the GDP for a country).	- Worldbank
mobile_cellular_subscriptions	 - Returns the number of mobile phone subscriptions (per 100 population)	- Worldbank
murder_rate	        - Returns the number of homicides (per 100,000 population).	 - UNODC
new_businesses_registered	 - Number of new limited liability corporations registered in the calendar year.	- Worldbank
olympicsummergames_goldmedals	 - Returns the number of gold medals a country won at the Olympic Games.	- IOC
olympicsummergames_silvermedals	 - Returns the number of silver medals a country won at the Olympic Games.	- IOC
olympicsummergames_bronzemedals	 - Returns the number of bronze medals a country won at the Olympic Games.	- IOC
population	        - Returns the population of a country.	- UN-Data
population_0_14	    - Returns the percentage of people between the age 0 and 14.	- Worldbank
population_15_64	  - Returns the percentage of of people between the age 15 and 64.	- Worldbank
population_over_64	- Returns the percentage of people who are older than 64 years.	 - Worldbank
pressfreedom_index	- Returns an index derived from "Reporters without borders" that reflects how free the press of a country is. The lower the value, the better the freedom of press.	 - www.rsf.org
research_expenditure	- Returns the public expenditures on scientific research (in % of the GDP for a country).	 - Worldbank
scientific_journal_articles	 - The number of scientific publications in medical or natural sciences.	- Worldbank
size	              - Returns the area of a country (unit: km²).	- UN-Data
tax_revenue	        - Compulsory transfers to the central government for public purposes (in % of the GDP for a country).	 - Worldbank
tax_revenue_total	  - Compulsory transfers to the central government for public purposes (in US-Dollar).	- Worldbank
tourist_arrivals	  - The number of foreign citizens that stayed at least one night in the country. This includes hotel stays, transfers, conference visits, etc.	 - UN-Data
tourism_expenditure	- The amount of expenditures dedicated for tourism (in % of the GDP for a country).	 - UN-Data
urban_population	  - Returns the percentage of people who live in a city.	- Worldbank

If there is no value to display, either "null" or "N/A" in string format is returned.
In the following, a sample request is given. This will return the population of the last five years of the United States and Great Britain (note, that you have to replace the api_key parameter with your own key):
GET http://inqstatsapi.inqubu.com?api_key=ADDYOURKEYHERE&data=population&countries=us,gb

Step 3: See the results
-----------------------
The response is an array consisting of JSON objects. Every JSON objects represents a country and follows this structure:
Key	Description
countryCode	The ISO country code.
countryName	The full country name.
[data key]	The rest of the JSON object contains all data keys you passed in the request as a key-value-pair.
