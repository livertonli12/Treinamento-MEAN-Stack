var newRestaurant = {
	"address" : {
        "building" : "351",
        "coord" : [
                -73.98513559999999,
                40.7676919
        ],
    	"street" : "West   57 Street",
        "zipcode" : "10019"
    },
    "borough" : "Manhattan",
    "cuisine" : "Irish",
    "grades" : [
        {
            "date" : ISODate("2014-09-06T00:00:00Z"),
            "grade" : "A",
            "score" : 2
        },
        {
     	    "date" : ISODate("2013-07-22T00:00:00Z"),
            "grade" : "A",
            "score" : 11
        },
        {
            "date" : ISODate("2012-07-31T00:00:00Z"),
            "grade" : "A",
            "score" : 12
        },
        {
            "date" : ISODate("2011-12-29T00:00:00Z"),
            "grade" : "A",
            "score" : 12
        }
    ],
    "name" : "Dj Reynolds Pub And Restaurant",
    "restaurant_id" : "30191841"
}

db.Restaurants.insert(newRestaurant)