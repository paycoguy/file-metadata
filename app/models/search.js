'use strict';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Search = Schema({
        term:String,
        when:{ type: Date, default: Date.now }
    });
    
module.exports = mongoose.model('Search',Search);