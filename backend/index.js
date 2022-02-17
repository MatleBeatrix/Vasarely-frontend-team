const fs = require('fs')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

const users = require('./data/users.json')


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/api/signup', (req, res) => {
  if (!req.body.username || !req.body.password) {
	  return res.sendStatus(400);
  } 

  for(let user of users){
	  if(user.username === req.body.username){
		  return res.sendStatus(409)
	  }
	}

	//todo
	const newUser = {
		username: req.body.username,
		password: req.body.password
	}
	
	users.push(newUser);
	fs.writeFileSync('./data/users.json', JSON.stringify(users));
	res.sendStatus(200);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
