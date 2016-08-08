var mongodb = require('mongodb');

var uri = 'mongodb://MongoLab-5:DHo0ddXmhCtcSYYAUGY1grWrKNxnQKJOym5jphd9p3k-@ds060977.mongolab.com:60977/MongoLab-5';

mongodb.MongoClient.connect(uri, function(err, db){
  if(err){
    console.log('erro');
    process.exit(1);
  }

  db.collection('exemplo').insert({x: 1}, function(err, result){
    if(err){
      console.log('erro');
      process.exit(1);
    }

    db.collection('exemplo').find().toArray(function(err, docs){
      if(err){
        console.log('erro');
        process.exit(1);
      }

      docs.forEach(function(doc){
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});
