const fs = require('fs');
let data = '';

let listarTabla = (base, limi) => {
    for (let i = 1; i <= limi; i++) {
        console.log(`${base}*${i}=${base*i}\n`);
    }
}

let crearArchivo = (base, limi) => {
    return new Promise((resolve, reject) => {

        //validacion
        //la validacion es en la clase
        if (!Number(limi)) {
            reject(`El limite introducido ${limi} no es un numero`);
            return
        }
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return
        }
        for (let i = 1; i <= limi; i++) {
            data += `${base}*${i}=${base*1}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt al limite ${limi}`);
        })

    })
}
module.exports = {
    crearArchivo,
    listarTabla
};

//funcion para crear una tabla de multiplicar
// for (let i = 1; i <= 10; i++) {
//     data += `${base}*${i}=${base*1}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido guardado`);
// })

//package.json define el proyecto
//npm init crear un arhcivo json en donde llenamos los campos pero solo la descripcion puede tener caractres latino
//la licencia ponmos mit y se creara eyn archivo json, esto se hace para que el ususario no descargue otras librerias

//npm i yags --save(el save es para que esa libreria se requiera en el proyecto)

//ahora vemos el json creado se ha añadido una depencia, ademas que se  ha creado un json y una carpeta
//si borramos la carpeta y queremos tenerlos nuevamentse solomente escribimos en el terminal npm install y instalara nuevamente la caroeta

//npm install --save-dev nodemon=es una dependenciad de desarrollo y una vez instalado se añadira al package.json
//con la version que esta o superiro el signo"^" significa superioir
//para desistarlo se pone npm uninstall nodemon y se queda vacio