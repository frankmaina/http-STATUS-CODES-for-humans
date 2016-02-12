var http = require('http');
var url = process.argv[2];
var data = require('./json/status-codes');
var jsonQuery = require('json-query');
var request = require('request');
var open = require('open');


request(url, function (error, response, body) {
  if (!error) {
    console.log(response.statusCode) 
    var status_string = '[code=' + response.statusCode + ']';

    var result = jsonQuery(status_string, {
        data: data
    }); 
    console.log('Code: '+result['value'].code+' \n '+result['value'].description);

    if (process.argv[3]=='-O'){
    	open(result['value'].spec_href) //open on web browser

    }
  }else{
  	console.log("\n "+error)
  }
})

