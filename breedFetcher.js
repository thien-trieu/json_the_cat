const request = require('request');
const breedName = process.argv.slice(2);


const fetchBreedDescription = function(breedName, callback) {

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
          console.log(`ERR accessing API`);
          console.log(`> ${error}`);
      return;
    }
    const data = JSON.parse(body);
    try {
      console.log(data[0].description);
    } catch (error) {
      console.log(`Breed was not found`);
    }
  });

};

fetchBreedDescription(breedName)
