let accion = "listar";

switch (accion) {
    case "listar":
        console.log("Listando");
        break;
    case 'guardar':
        console.log("Acción de guardar");
        break;
    default:
        console.log("Acción desconocida");
        break;
}