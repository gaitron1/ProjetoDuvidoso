const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static('build'))

app.use(cors())

app.listen(3001, () => {
  console.log(`Server running on port 3001`)
})