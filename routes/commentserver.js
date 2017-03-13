var express = require('express');
var router = express.Router();
module.exports = router;
var counter = Math.round(Math.random()*10000);

router.post('/', function(req, res, next) {
    console.log("PUT ajax log");
    console.log(req.body.comment);
    console.log(req.body.author);
    console.log(counter++);
    var dbName=req.body.comment;
    var authorname=req.body.author;
    //var dbName=req.body;
    var request = require('request'),
    url = "http://kkunath.cloudant.com/newdb/"+counter+"/";
    console.log(url);
    //"counter"+"+dbName+"/";
    request({
      url : url,
      method:"PUT",
      headers: {
        'cache-control': 'no-cache',
         authorization: 'Basic a2t1bmF0aDprb3VzaGlrS1QxNyE='
      },
      body: {author:authorname,comment: dbName },
      json: true
    }, function (error, response, body) {
        //console.log(body);
        //res.json(body);
    });
});

router.get('/', function(req, res, next) {
    console.log("Get ajax log");
    var request = require('request'),
    url = "https://kkunath:koushikKT17!@kkunath.cloudant.com/newdb/_find";
request({
        url : url,
        method:"POST",
        json: true,
        body:
        {
          selector: { _id: { '$gt': 0 } },
          fields: [ '_id', 'comment', 'author' ]
        }
    },

    function (error, response, body) {
        res.send(body);
        console.log(body);
    }
);
});
