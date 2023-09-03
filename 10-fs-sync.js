// const fs = require('fs')
const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// create a file or overwrite the content

// writeFileSync(
//   './content/result-sync.txt',
//   `Here is the result: ${first}, ${second}`
// )

// append to an existing file

writeFileSync(
  './content/result-sync.txt',
  `Here is the result: ${first}, ${second}`,
  { flag: 'a' }
)
