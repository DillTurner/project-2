const express = require('express')
const app = express()
const port = 3000
const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('http://strainapi.evanbusse.com/UyDNtOb/strains/search/name/Zoom Pie')
  .then(function (response) {
    // handle success
    var arr = response.data.race;
    console.log(arr);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });



app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

app.listen(port, () => console.log(`App listening on port ${port}!`))




