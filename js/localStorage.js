function crearUsuario(){
    var nombre = document.getElementById("nom").value;
    var apellido = document.getElementById("ape").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("tel").value;

    var usuario={
        nombre : nombre,
        apellido : apellido,
        correo: correo,
        telefono: telefono
    }; 
    
    var cadenaUsuario=JSON.stringify(usuario);
    localStorage.setItem(nombre, cadenaUsuario);
    var nome =  localStorage.getItem(nombre);
    console.log(nome);
    console.log("Usuario agregado");
    alert(cadenaUsuario);
}
