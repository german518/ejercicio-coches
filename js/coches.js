var user = "german"
var coche1 = "mazda"
var coche2 = "toyota"
var coche3 = "fiat"

function nombreUser() {
    console.log('hola ' + user)
}
nombreUser();

var cochesUsuario = [];
function marcas() {
    cochesUsuario.push(coche1),
        cochesUsuario.push(coche2),
        cochesUsuario.push(coche3),
        console.log('tienes los coches ' + cochesUsuario[0])
};
marcas();
