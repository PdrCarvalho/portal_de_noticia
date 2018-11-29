var http = require('http');
    var server = http.createServer(function(req,res){
    var categoria = req.url;
    if (categoria == '/tecnologia'){
        res.end("<html><body>Tecnologo</body></html>");
    }
    else if (categoria == '/Esporte'){
        res.end("<html><body>Fotball</body></html>");
    }
    else if (categoria =='/Sport'){
        res.end("<html><body>lolzinho</body></html>");
    }
    else{
    res.end("<html><body>Portal de Noticia</body></html>");
    }
 });
 server.listen(3000);