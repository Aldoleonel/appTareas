const fs = require('fs');
const tareasJSON = fs.readFileSync('./app-tareas/tareas.json', 'utf-8');
const tareas = JSON.parse(tareasJSON);

module.exports = {
    listar: function () {
        console.log("**************LISTA DE TAREAS ****************");
        tareas.forEach(element => {
            console.log(`${element.titulo} ${element.estado}`);
        });
            
        
        console.log("************************************************");
        return null;
    }
};
