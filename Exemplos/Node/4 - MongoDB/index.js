var mongodb = require('mongodb');

var uri = 'mongodb://user:password@host:port/database';

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
