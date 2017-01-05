var express = require('express')
var app = express() // this calls the top-level function exported by the express module, creates an Express application

// app has methods like .get for routing HTTP requests
// arguments: the path and the callback function
// the callback should expect request and response args (??)
app.get('/', (req, res) => {
  var host = req.get('host')
  res.send("try visiting " + host + "/helloworld instead")
})

app.get('/helloworld', (req, res) => {
  // instead of "returning" data:
  // "send" data with the response object
  // `res` is the object representing the HTTP response received by Express
  // Built on the Node response object
  // res.send(body) <-- body is a Buffer, String, object, or Array
  res.send("hello world")
})

app.get('/json', (req, res) => {
  res.json({ msg: 'this is json' });
})

app.get('/upload', (req, res) => {
  const form = `
    <form action='/upload' method='post'>
      Submit this form
      <input type='submit' />
    </form>
  `
  res.send(form)
})

app.post('/upload', (req, res) => {
  res.send('hello! upload complete')
})

// app.listen is a convenience function that does some other stuff
// to start an HTTP server
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
