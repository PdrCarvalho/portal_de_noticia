var app = require('./config/server');
var msg = require('./mod_teste');
var rotaNoticias = require('./app/routes/noticias')(app);
var rotaHome = require('./app/routes/home')(app);
var rotaFormulario = require('./app/routes/formulario_inclusao_noticias')(app);
// rotaNoticias(app);
// rotaHome(app);
// rotaFormulario(app);

app.listen(3000,function(){
    console.log("Servidor Rodando com express");
    console.log(msg());
});