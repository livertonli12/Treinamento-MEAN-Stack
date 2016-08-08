/* Find */
var query = { "name" : "Dj Reynolds Pub And Restaurant" };

db.Restaurants.find(query);


/* FindOne */
db.Restaurants.findOne({"address.zipcode": "10019"});