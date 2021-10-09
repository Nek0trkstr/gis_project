const express = require('express');
const router 	= express.Router();
const fs = require('fs');
const Feature = require('../models/feature')

router.get('/', (req, res) => {
	const queryMonth = parseInt(req.query.month);
	const queryYear = parseInt(req.query.year);
	Feature.aggregate([
		{$addFields: {
			"properties.date": {"$toDate": '$properties.time'}
		}},
		{$addFields: { 
			"properties.month": 	{$month: '$properties.date'}, 
			"properties.year": 		{$year: '$properties.date'}
		}},
		{$match: { 'properties.month': queryMonth, 'properties.year': queryYear}}
	]).exec((err, data) => {
		if (err) {
			console.error(err);
			res.statusCode(500).send();
		} else {
			res.send({"type":"FeatureCollection","features": data})
		}
	})
})

module.exports = router;