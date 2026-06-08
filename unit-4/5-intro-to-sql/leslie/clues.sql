SELECT * FROM countries;
SELECT * FROM cities;
SELECT * FROM countryLanguages;

-- Clue #1: We recently got word that someone fitting Carmen Sandiego's description has been traveling through Southern Europe. 
-- She's most likely traveling someplace where she won't be noticed, so find the least populated country in Southern Europe, 
-- and we'll start looking for her there.
 
-- Write SQL query here

SELECT name AS "country_name"
FROM countries
WHERE "region"='Southern Europe'
ORDER BY "population"
LIMIT 1;

-- Result: Holy See (Vatican City State)


-- Clue #2: Now that we're here, we have insight that Carmen was seen attending language classes in this country's officially 
-- recognized language. Check our databases and find out what language is spoken in this country, so we can call in a 
-- translator to work with you.

-- Write SQL query here

SELECT countries."name" AS "country_name", countryLanguages."language" 
FROM countries JOIN countryLanguages 
ON countryLanguages."countrycode" = countries."code"
WHERE "region"='Southern Europe'
ORDER BY "population"
LIMIT 1;

-- Result: Italian


-- Clue #3: We have new news on the classes Carmen attended – our gumshoes tell us she's moved on to a different country, 
-- a country where people speak only the language she was learning. Find out which nearby country speaks nothing but that 
-- language.

-- Write SQL query here

SELECT c_1."name" AS "country_name", cl_3."language" 
FROM countries c_1
JOIN countries c_2
	ON c_2."continent" = c_1."continent"
JOIN countryLanguages cl_3 
	ON cl_3."countrycode" = c_1."code" 
	AND cl_3."language" = 'Italian'
LEFT JOIN countryLanguages cl_4 
	ON cl_4."countrycode" = c_1."code" 
	AND cl_4."language" <> 'Italian'
WHERE c_2."region" = 'Southern Europe'
	AND cl_4."language" IS NULL
	AND c_1."name" <> 'Holy See (Vatican City State)'
GROUP BY c_1."name", cl_3."language";

-- Result: San Marino


-- Clue #4: We're booking the first flight out – maybe we've actually got a chance to catch her this time. There are only two 
-- cities she could be flying to in the country. One is named the same as the country – that would be too obvious. We're 
-- following our gut on this one; find out what other city in that country she might be flying to.

-- Write SQL query here

SELECT cities."name" AS "city_name", countries."name" AS "country_name"
FROM cities
JOIN countries
	ON countries."code" = cities."countrycode"
	AND cities."name" <> countries."name"
WHERE countries."name" = 'San Marino';

-- Result: Serravalle


-- Clue #5: Oh no, she pulled a switch – there are two cities with very similar names, but in totally different parts of the 
-- globe! She's headed to South America as we speak; go find a city whose name is like the one we were headed to, but doesn't 
-- end the same. Find out the city, and do another search for what country it's in. Hurry!

-- Write SQL query here

SELECT cities."name" AS "city_name", countries."name" AS "country_name"
FROM cities
JOIN countries
	ON countries."code" = cities."countrycode"
WHERE countries."region" = 'South America'
	AND cities."name" LIKE 'Serra%';

-- Result: Brazil


-- Clue #6: We're close! Our South American agent says she just got a taxi at the airport, and is headed towards
-- the capital! Look up the country's capital, and get there pronto! Send us the name of where you're headed and we'll
-- follow right behind you!

-- Write SQL query here

SELECT cities."name" AS "capital_name", countries."name" AS "country_name"
FROM cities
JOIN countries
	ON countries."code" = cities."countrycode"
	AND cities."id" = countries."capital"
WHERE countries."name" = 'Brazil';

-- Result: Brasília


-- Clue #7: She knows we're on to her – her taxi dropped her off at the international airport, and she beat us to the boarding
-- gates. We have one chance to catch her, we just have to know where she's heading and beat her to the landing dock. Lucky 
-- for us, she's getting cocky. She left us a note (below), and I'm sure she thinks she's very clever, but if we can crack it, 
-- we can finally put her where she belongs – behind bars.


--               Our playdate of late has been unusually fun –
--               As an agent, I'll say, you've been a joy to outrun.
--               And while the food here is great, and the people – so nice!
--               I need a little more sunshine with my slice of life.
--               So I'm off to add one to the population I find
--               In a city of ninety-one thousand and now, eighty five.


-- We're counting on you, gumshoe. Find out where she's headed, send us the info, and we'll be sure to meet her at the gates 
-- with bells on.

-- Write SQL query here

SELECT countries."name" AS "country", cities."name" AS "city" 
FROM cities
JOIN countries
	ON countries."code" = cities."countrycode"
WHERE cities."population" = 91084;

-- Result: Santa Monica