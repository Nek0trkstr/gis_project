var express = require('express')
var app = express();

const port = 3000;

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',function(req,res){
	res.render('index');
});

app.listen(port,function(){
	console.log(`Server listening on port ${port}`);
});