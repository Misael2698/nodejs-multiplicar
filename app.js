// const fs = require('fs')
//importacion simple
//const multiplicar = require('./multiplicacion/multiplicar.js')
//importacion con destructutacion
const { argv } = require('./config/yargs')
const { crearArchivo, listarTabla } = require('./multiplicacion/multiplicar.js')
let comando = argv._[0]

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite).
        then(archivo => console.log(`Archivo Creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    case 'listar':

        listarTabla(argv.base, argv.limite);
        break;
    default:
        console.log("comano no existe");
}
//para coger datos desde terminal
//let base = process.argv[2].split('=')[1];
let argv2 = process.argv
    //console.log(argv);
    //console.log(argv2);
    //node app crear --limite 6 -b=4:se puede ver que con este comando toma parametros y cuando no esta con un guion
    //lo toma como comando

//opcion 2
// let regex = /(\d+)/g;
// let base = process.argv[2].match(regex)

//console.log(base);



// console.log(module);


//let base = 5;
// let data = '';

// //funcion para crear una tabla de multiplicar
// for (let i = 1; i <= 10; i++) {
//     data += `${base}*${i}=${base*1}\n`;
// }
// //permite crear un arhivo con los datos de la funcion en la carpeta en donde nosotros queramos que en este caso es en tablas
// // fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
// //     if (err) throw err;
// //     console.log(`El archivo tabla-${base}.txt ha sido guardado`);
// // })

//console.log(process); //nos muestra la informacion