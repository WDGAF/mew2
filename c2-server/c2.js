const express = require('express')
const axios = require('axios');
const app = express()
const port = 39943
var os = require('os');

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
  
// server status infos
app.get('/server-status', (res) => {

  let servStatus = {
    "hostname": os.hostname(),
    "uptime":os.uptime(),
    "totalmem":os.totalmem(),
    "freemem":os.freemem(),
    "netwroks":os.networkInterfaces(),
    "cpus":os.cpus(),
    "platfrom":os.platform(),
    "release":os.release(),
    "user":os.userInfo(),
    "arch":os.arch(),
    "type":os.type()
  }

  res.send(servStatus)
})

// run app on public 
app.listen(port, '0.0.0.0');
