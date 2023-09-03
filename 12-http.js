const http = require('http')
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
    return
  }
  if (req.url === '/about') {
    res.end('Here is our short history')
    return
  }
  if (req.url === '/contact') {
    res.end('Contact us today!')
    return
  }

  res.end(`
  <h1>Oops!</h1>
  <p>We can't seem to find the page your looking for. 🤔</p>
  <a href="/">return to home page</a>
  `)
})

server.listen(5000)
