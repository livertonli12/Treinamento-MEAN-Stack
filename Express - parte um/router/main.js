module.exports = function(app) {
    app.get('/', function(req, res) {
        res.render('index.html');
    });

    app.get('/about', function(req, res){
        res.render('about.html');
    });

    app.get('/content', function(req, res){
        var topics = [
            { name: 'node', hours: 2 },
            { name: 'mongodb', hours: 2},
            { name: 'mongoose', hours: 1}
        ];
        var title = "Treinamento";

        res.render('content.html', {
            topics: topics,
            title: title
        });
    });
};
