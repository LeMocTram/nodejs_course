const path = require('path')
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const handlebars = require('express-handlebars')
const app = express()
const port = 3001
const route = require('./routes')
const db = require('./config/db')
app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.use(methodOverride('_method'))

//connect DB
db.connect();

//HTTP logger
app.use(morgan('combined'))


//Template engine
app.engine('hbs', handlebars.engine({ defaultLayout: 'main', extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))// resources/views


//Route init
route(app);


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})