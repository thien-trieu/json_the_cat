const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    const data = JSON.parse(body);

    try {
      callback(null, data[0].description);
    } catch (error) {
      error = "Invalid/non-existent breed.";
      callback(error, null);
    }
  });
};

module.exports = { fetchBreedDescription };