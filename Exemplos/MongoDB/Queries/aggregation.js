/* Aggretate com group */

var group = { $group: { _id: "$borough", count: {$sum: 1} } };
db.Restaurants.aggregate([group]);


/* Aggretate com match, group e project */

var match = { $match: { "borough": "Queens", "cuisine": "Brazilian" } };
var group = { $group: { "_id": "$address.zipcode" , "count": { $sum: 1 } } };
var project = { $project: { _id: 0, zipcode: "$_id", quantidade: "$count" } };

db.Restaurants.aggregate([ match, group, project ]);