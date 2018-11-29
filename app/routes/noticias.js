module.exports = function(app){
    app.get('/noticias', function(req,res){

        var mysql = require('mysql');

        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'senha123',
            database: 'portal_noticias'
        });
        connection.connect(function(err){
            if(!err) {
                console.log("Database is connected ... \n\n");  
            } else {
                console.log("Error connecting database ... \n\n");  
            }
            });
            connection.query("SELECT * FROM noticias", function(error, result){
                res.send(result);
            });
        // connection.query("USE portal_noticias", function(error, result){
        //     res.send(result);
        // });

        //res.render('noticias/noticias');
    });
}