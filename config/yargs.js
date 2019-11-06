// const fs = require('fs')
//importacion simple
//const multiplicar = require('./multiplicacion/multiplicar.js')
//importacion con destructutacion
let opt = {
    base: {
        demand: true,
        alias: 'b',
        description: 'la base de la tabla de multiplicacion'
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'El limite de la tabla de multiplicar'
    }
};
const argv = require('yargs').
command('crear', 'Crea un archivo con la tabla de multiplicar', opt)
    .command('listar', 'listar tabla de multiplicar', opt).help().argv;


module.exports = {
    argv
};