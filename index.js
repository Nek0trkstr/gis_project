const express 					= require('express');
			app 							= express();
			mongoose					= require('mongoose');
			earthQuakesRoutes	= require('./routes/earthquakes');
			seedDB						= require('./seeds');

const port = 3000;
mongoose.connect("mongodb://mongodb/gis");

//SeedDB
seedDB();

app.set('view engine','ejs')
app.use(express.static('public'))

app.get('/',function(req,res){
	res.render('index');
});

app.use('/api/earthquake', earthQuakesRoutes);
app.listen(port,function(){
	console.log(`Server listening on port ${port}`);
});