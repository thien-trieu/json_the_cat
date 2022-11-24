const request = require('request');
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args}`, (error, response, body) => {
  const data = JSON.parse(body);
  try {
    console.log(data[0].description);
  } catch (error) {
    console.log("There was an error", error.name);
  }
});