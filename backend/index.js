const fs = require('fs')
const cors = require('cors')
const express = require('express')
const app = express()
const port = 4000

app.use(cors())
app.use(express.json())

const users = require('./data/users.json')

const sessions = {}

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
		password: req.body.password,
		todoList: []
	}
	
	users.push(newUser);
	fs.writeFileSync('./data/users.json', JSON.stringify(users));
	res.sendStatus(200);
})

app.post('/api/login', (req,res) => {
	const auth = req.header('Authorization')
	if (!auth) return res.sendStatus(401)

	const credentials = auth.split('&&&');
	const username = credentials[0];
	const password = credentials[1];
	const user = users.find(user => username === user.username && password === user.password)
	if (!user) return res.sendStatus(401)
	let sessionId = Math.random().toString()
	sessions[sessionId] = user
	console.log(sessions)
	// setTimeout(() => {
	// 	delete sessions[sessionId]
	// 	console.log('Session end')
	// }, 6*10*1000);
	res.json(sessionId)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
