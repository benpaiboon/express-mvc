// Config Add or Remove routes

// Example 
// const routes = [
//   require('../../routers/<router1>'),
//   require('../../routers/<router2>')
// ]

const routes = [
  require('../../routers/indexRouter'),
  require('../../routers/bookRouter'),
  require('../../routers/authorRouter')
]

module.exports = routes;