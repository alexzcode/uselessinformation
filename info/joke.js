const JokeAPI = require('sv443-joke-api');

var obj = document.getElementById("response")
JokeAPI.getJokes()
  .then((res) => res.json())
  .then((data) => {
    obj.innerText = data
  })