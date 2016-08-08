/* Atualizando com Save */

var query = { "name" : "Dj Reynolds Pub And Restaurant" };

var restaurant = db.Restaurants.findOne(query);
restaurant.name = "Dj Reynolds";

db.Restaurants.save(restaurant);

/* Atualizando com Update */

var query = { "name" : "Dj Reynolds Pub And Restaurant" };
var mod = { 
	$set: { 
		name: "Dj Reynolds" 
	} 
};

db.Restaurants.update(query, mod);