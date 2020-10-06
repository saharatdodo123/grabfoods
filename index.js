const express = require('express');
//Middleware เพื่ออ่าน req.body
const restaurantRouter = require('./routes/restaurant');
const hbs = require('express-handlebars');
const router = require('./routes/index');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

app.use('/', router);

app.use('/api' ,restaurantRouter);

app.listen(3000, () => {
    console.log('Listening to port 3000');
});
