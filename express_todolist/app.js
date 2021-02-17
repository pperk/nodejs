var express = require('express');
var todoController = require('./controllers/toController');
app = express();
app.set('view engine','ejs');
app.use(express.static('./public'));
todoController(app);
app.listen(3000);
