var axios = require("axios").default;
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let factions = (faction) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/factions/' + faction,
    headers: {
      'x-rapidapi-key': '87179b9680mshb4998e55e8ae874p164364jsn2b7f85cf0e17',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};

let races = (race) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/races/' + race,
    headers: {
      'x-rapidapi-key': '87179b9680mshb4998e55e8ae874p164364jsn2b7f85cf0e17',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};


let qualities = (qualitie, qtd) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/qualities/'+ qualitie,
    headers: {
      'x-rapidapi-key': '87179b9680mshb4998e55e8ae874p164364jsn2b7f85cf0e17',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};

let types = (type) => {
  return {
    method: 'GET',
    url: 'https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/types/' + type,
    headers: {
      'x-rapidapi-key': '87179b9680mshb4998e55e8ae874p164364jsn2b7f85cf0e17',
      'x-rapidapi-host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
    }
  }
};

app.get('/factions/:fation', function (req, res) {
  const { fation } = req.params
  const { pageSize} = req.query
  axios.request(factions(fation)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    res.json(resp)
  }).catch(function (error) {
    console.error(error);
  });
})

app.get('/races/:race', function (req, res) {
  const { race } = req.params
  const { pageSize} = req.query
  axios.request(races(race)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    res.json(resp)
  }).catch(function (error) {
    console.error(error);
  });
})


app.get('/qualities/:qualitie', function (req, res) {
  const { qualitie } = req.params
  const { pageSize} = req.query
  axios.request(qualities(qualitie)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    res.json(resp)
  }).catch(function (error) {
    console.error(error);
  });
})

app.get('/types/:type', function (req, res) {
  const { type } = req.params
  const { pageSize} = req.query
  axios.request(types(type)).then(function (response) {
    let resp = response.data;
    resp = resp.splice(0, pageSize);
    res.json(resp)
  }).catch(function (error) {
    console.error(error);
  });
})

app.listen(3000, function () {
  console.log('Server is running!')
});



