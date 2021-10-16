const mongoose = require('mongoose')
var featureSchema = new mongoose.Schema({
  "type": {
    "type": "String"
  },
  "properties": {
    "mag": {
      "type": "Number"
    },
    "place": {
      "type": "String"
    },
    "time": {
      "type": "Number"
    },
    "updated": {
      "type": "Number"
    },
    "tz": {
      "type": "Mixed"
    },
    "url": {
      "type": "String"
    },
    "detail": {
      "type": "String"
    },
    "felt": {
      "type": "Mixed"
    },
    "cdi": {
      "type": "Mixed"
    },
    "mmi": {
      "type": "Mixed"
    },
    "alert": {
      "type": "Mixed"
    },
    "status": {
      "type": "String"
    },
    "tsunami": {
      "type": "Number"
    },
    "sig": {
      "type": "Number"
    },
    "net": {
      "type": "String"
    },
    "code": {
      "type": "String"
    },
    "ids": {
      "type": "String"
    },
    "sources": {
      "type": "String"
    },
    "types": {
      "type": "String"
    },
    "nst": {
      "type": "Mixed"
    },
    "dmin": {
      "type": "Number"
    },
    "rms": {
      "type": "Number"
    },
    "gap": {
      "type": "Number"
    },
    "magType": {
      "type": "String"
    },
    "type": {
      "type": "String"
    },
    "title": {
      "type": "String"
    }
  },
  "geometry": {
    "type": {
      "type": "String"
    },
    "coordinates": {
      "type": [
        "Number"
      ]
    }
  },
  "id": {
    "type": "String"
  }
})

var Feature = mongoose.model("Feature", featureSchema)
module.exports = Feature;