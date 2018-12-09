// Config Add or Remove routes

// Example 
// const routes = [
//   require('./<router1>'),
//   require('./<router2>')
// ]

const routes = [
  require('./indexRouter'),
  require('./bookRouter'),
  require('./authorRouter')
]

module.exports = routes;