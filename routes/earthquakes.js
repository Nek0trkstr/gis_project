const express = require('express');
const router 	= express.Router();
const fs = require('fs');
const Feature = require('../models/feature')

router.get('/', (req, res) => {
	const queryMonth = parseInt(req.query.month);
	const queryYear = parseInt(req.query.year);	
	const startTime = new Date(queryYear, queryMonth, 1).getTime();
	const endTime = new Date(queryYear, queryMonth + 1, 0).getTime()
	Feature.find({
		'properties.time': {$gte: startTime, $lt: endTime}
	}, (err, data) => {
		if (err) {
			console.log(err)
		} else {
			res.send({"type":"FeatureCollection","features": data})
		}
	})
})

module.exports = router;