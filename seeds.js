const mongoose = require('mongoose');
const Feature 	= require('./models/feature');
const fs = require('fs');


async function  seedDB() {
	// // Clear before seeding
	// Feature.remove({}, (err) => {
	// 	if (err)  {
	// 		console.log(err);
	// 	}
	// })
	featureFiles = []
	featureFiles.forEach(file => {
		let rawdata = fs.readFileSync(file);
		let features = JSON.parse(rawdata)
		features.forEach(feature => {
			Feature.create(feature, (err, earthquake) => {
				if (err) {
					console.error(err)
				} else {
					console.log(`Earthquake seeded: ${earthquake.properties.title}, at ${earthquake.properties.time}`);
				}
			});
		});
	});
}

module.exports = seedDB;
