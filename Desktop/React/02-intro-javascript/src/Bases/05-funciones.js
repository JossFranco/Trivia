/*const saludar = function (nombre){
return `Hola,${nombre}`;
};*/
//saludar =20;
//console.log(saludar)
const saludar2 = (nombre) => {
return `Hola, ${nombre}`;
}
const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = (nombre) => `Hola Mundo`;

console.log(saludar2('Vegueta'));
console.log(saludar3('Goku'));
console.log(saludar4());

const getUser = () =>({
    uid: 'ABC123',
    username: 'Joseline-f1502'
})
const user = getUser();console.log(user);

//Tareas
// 1. Transformar a funcion flecha
//2. Tiene que retirnar un objeto implicito
//3. Pruebas 

const getUsuarioActivo = (nombre) => 
     ({
        uid: 'ABC456',
        username: nombre
    } )

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

