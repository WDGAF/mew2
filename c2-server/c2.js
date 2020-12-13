const express = require('express')
const axios = require('axios');
const app = express()
const port = 39943

app.post('/', (req, res) => {
  res.send('Hello World!')

  axios.post('/user', {
    os: 'sss',
    test: 'aaa'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

})


app.get('/', (req, res) => {
    res.send('Hello World!')
    
})


app.post('/test', (req, res) => {
    res.send('Hello World!')    
})
  

// run app on public 
app.listen(port, '0.0.0.0');
