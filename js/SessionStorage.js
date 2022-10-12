function iniciar(){
    //Funcion para inicializar todos los eventos
    var btnTorneo = document.getElementById('registrar'); // variables las cuales reciben las acciones de los botones
    var btnLimpiar = document.getElementById('limpiar');
    var btnClearLista = document.getElementById('clearList');

    if(btnTorneo.addEventListener){
            btnTorneo.addEventListener("click", inscribir, false);
    }

    if(btnLimpiar.addEventListener){
        btnLimpiar.addEventListener("click", limpiar, false);
    }   

    if(btnClearLista.addEventListener){
        btnClearLista.addEventListener("click", eliminarLista, false);
    } 

}

function inscribir(){

    if(typeof(Storage)  != 'undefined'){  
        //Esta parte nos indica si el navegador soporta el objeto storage osea que si tiene disponible es API
    
        console.log(Storage); 
        // con esto vamos observar y entender si nuestro navegador tiene implementado el objeto storage
        
        var equipo = [];

        for(var i = 0; i<4;i++){

            if(i == 0){

                equipo[i] = document.getElementById("nombreTeam").value;

            }else if( i == 1){

                equipo[i] = document.getElementById("cantJugadores").value;

            }else if( i == 2){

                equipo[i] = categoriaTeam.options[categoriaTeam.selectedIndex].value;

            }else if(i == 3){
                
                equipo[i] = depTeam.options[depTeam.selectedIndex].value;

            }
            
        }
        sessionStorage.setItem("equipo",JSON.stringify(equipo));
        /*CON setItem logramos realizar el almacenamiento del arreglo y  con JSON.stringify convertimos a un 
        arreglo */                                                     
        /* este arreglo por que al momento de enviarlo al navegador el arreglo original
        se hace un string separado con "," */      
        //MOSTRAMOS LO EQUIPOS

        var equipoAlmacenados = JSON.parse(sessionStorage.getItem("equipo")); 
        //CON .getItem logramos obtener lo almacenado en el navegador y con el JSON.PARSE lo
        // convertimos a un arreglo
        
        //impresion de los datos
        for( var j = 0; j<4 ; j++){
            if(j == 0){
        var result = document.getElementById('detalles').innerHTML += "<br>";
    var result = document.getElementById('detalles').innerHTML += "<h3 class='text-center'>Informacion Equipo: </h3>";
        var result = document.getElementById('detalles').innerHTML += "<ul>";
        var result = document.getElementById('detalles').innerHTML += "<li>Nombre del equipo: "+
         equipoAlmacenados[j] +"</li>";
            }else if( j == 1){
        var result = document.getElementById('detalles').innerHTML += "<li>Numero de personas en el equipo: "+ 
        equipoAlmacenados[j] +"</li>";
            }else if( j == 2){
                var result = document.getElementById('detalles').innerHTML += "<li>Categoria del equipo: "+ 
                equipoAlmacenados[j] +"</li>";
            }else if(j == 3){
                
    var result = document.getElementById('detalles').innerHTML += "<li>Departamento del equipo: "+ equipoAlmacenados[j] +"</li>";
                var result = document.getElementById('detalles').innerHTML += "</ul>";

            }
        }
        console.log(equipoAlmacenados); // con esto podra observar como se el arreglo en la consola
    }else{
        alert("Storage no es compatible en este navegador.");
    }



}

function limpiar(){

    sessionStorage.removeItem("equipo");
    //con esto realizamos la limpia de datos en el sessionStorage en e lnavegador para poder ingresar otro equipo
   
}

function eliminarLista(){

    var result = document.getElementById('detalles').innerHTML =" ";

}


if(window.addEventListener){
    window.addEventListener("load", iniciar, false);
}





