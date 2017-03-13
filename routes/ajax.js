/**
 * Created by Koushik on 6/3/2016.
 */
 //koushik tuesdY INIT
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    console.log("Post ajax log");
    console.log(req.body.score);
    var dbName=req.body.score;
    var request = require('request'),
    url = "https://kkunath:koushikKT17!@kkunath.cloudant.com/"+dbName+"/";
    request({
      url : url,
      method:"POST",
      headers: {
        'cache-control': 'no-cache',
        'content-type': 'application/json',
         authorization: 'Basic a2t1bmF0aDprb3VzaGlrS1QxNyE='
      },
      body: { name: [ 'abc' ] },
      json: true
    }, function (error, response, body) {
        console.log(body);
        res.json(body);
    });
});

router.get('/', function(req, res, next) {
    console.log("Get ajax log");
    console.log(req.query.dbNames);
    var dbName=req.query.dbNames;
    var request = require('request'),
    url = "https://kkunath:koushikKT17!@kkunath.cloudant.com/"+dbName+"/_all_docs";
request({
        url : url,
        method:"GET",
        json: true
    },
    function (error, response, body) {
        res.send(body);
    }
);
});

router.delete('/', function(req, res, next) {
    console.log("Delete ajax log");
    console.log(req.body.scores);
    var dbName=req.body.scores;
    var request = require('request'),
    url = "https://kkunath:koushikKT17!@kkunath.cloudant.com/"+dbName+"/";
    request({
      url : url,
      method:"DELETE",
      headers: {
        'cache-control': 'no-cache',
         authorization: 'Basic a2t1bmF0aDprb3VzaGlrS1QxNyE='
      },
      json: true
    }, function (error, response, body) {
        console.log(body);
        res.json(body);
    });
});

router.put('/', function(req, res, next) {
    console.log("PUT ajax log");
    console.log(req.body.scores);
    var dbName=req.body.scores;
    var request = require('request'),
    url = "https://kkunath:koushikKT17!@kkunath.cloudant.com/"+dbName+"/";
    request({
      url : url,
      method:"PUT",
      headers: {
        'cache-control': 'no-cache',
         authorization: 'Basic a2t1bmF0aDprb3VzaGlrS1QxNyE='
      },
      json: true
    }, function (error, response, body) {
        console.log(body);
        res.json(body);
    });
});


module.exports = router;
