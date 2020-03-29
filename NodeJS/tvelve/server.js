if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const express = require('express');
const app = express();
const path = require('path');
const bcrypt = require('bcrypt')
const passport = require('passport')
const initializePassport = require('./passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
initializePassport(
passport,
email =>{users.find(user => user.email === email),
id =>{users.find(user => user.id === id)
})

const users = [] //db or txt file


app.set('view-engine','ejs')
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended : false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}))

app.use(passport.initialize())
app.use(passport.session())

var PORT = 80

app.get('/', checkAuthenticated,function(req,res) => {
	res.render('index.ejs',{})
})

app.get('/login',checkNotAuthenticated,function(req,res) => {
	res.render('login.ejs')
	
})

app.post('/login',passport.authenticate('local',
successRedirect:'/index',
failRedirect:'/login',
failFlash:True))

app.get('/register',checkNotAuthenticated,function(req,res) => {
	res.render('register.ejs')
	
})

app.post('/register',async function(req,res) => {
	try{
		const hashedPassword = await bcrypt.hash(req.body.password,10)
		users.push({
			id: Date.now().toString(),
			name: req.body.name,
			email: req.body.email,
			password: hashedPassword
		})
		res.redirect('/index',{message = 'User registered'})
	}
	catch{
		res.redirect('/register')
	}

})

app.delete('/logout', (req, res) => {
  req.logOut()
  res.redirect('/login')
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

app.listen(PORT);

console.log('Running at Port ' + PORT);