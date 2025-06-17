const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan')
const mongoose = require('mongoose');
const cors = require('cors')


require('dotenv/config');
const api = process.env.API_URL;

const usersRoutes = require('./routes/users');
const shopsRoutes = require('./routes/shops');


//middleware
app.use(bodyParser.json());
app.use(morgan('tiny'));
//app.use(authJwt);
app.use(cors())

//routers
app.use(`${api}/users`,usersRoutes);
app.use(`${api}/shops`,shopsRoutes);

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser : true,
    useUnifiedTopology: true,
    dbname: 'FashionHunt',
})
.then(()=>{
    console.log('Database connection is ready...')
})
.catch((err)=>{
    console.log(err);
}
)

app.listen(3001, ()=>{
    console.log(api);
    console.log('server is running http://localhost:3001')
})