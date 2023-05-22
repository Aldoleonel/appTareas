const fs = require('fs');
const moduloTareas = require('./funcionesDeTareas');
const argv = require("process").argv;

const comando = argv[2];
if (!comando) {
  console.log("Atención: debes proporcionar una acción. Las acciones disponibles son listar y agregar.");
} else {
  switch (comando) {
    case "listar":
      moduloTareas.listar();
      break;
        default:
      console.log("------------------------------------");
      console.log("No entiendo qué quieres hacer");
      console.log("las acciones disponibles son: listar")
      console.log("------------------------------------");
      break;
  }
}
