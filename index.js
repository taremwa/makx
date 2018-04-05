var express = require('express');
var hbs = require('express-handlebars');
var path = require('path');

var app = express();

app.set('port', (process.env.PORT || 8080))

app.engine('handlebars', hbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

app.use(express.static(path.resolve(__dirname, "public")))

app.get ('/', function(req, res){
    res.render('index');
})

app.listen(app.get('port'), function(){
    console.log(`Server started at ${app.get('port')}`);
})