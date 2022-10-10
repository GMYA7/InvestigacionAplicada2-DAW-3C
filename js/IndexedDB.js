const indexedDB = window.indexedDB
const form = document.getElementById('form')
const alumnosListado = document.getElementById('alumnosListado')

if(indexedDB && form ){
    var db
    const request = indexedDB.open('listaDB',1)
    request.onsuccess = () => {
        db = request.result
        console.log('Open',db)
        leerDatos()
    }
    request.onupgradeneeded = () =>{
        db = request.result
        console.log('Create',db)
        const objectStore = db.createObjectStore('alumnos',{
                keyPath: 'codEstudiante'
        })
    }
    request.onerror = () => {
        console.log('Error',error)
    }
    const agregarDatos = (data) =>{
        const transaccion = db.transaction(['alumnos'],'readwrite')
        const objectStore = transaccion.objectStore('alumnos')
        const request = objectStore.add(data)
        leerDatos()
    }
    const leerDatos = (data) =>{
        const transaccion = db.transaction(['alumnos'],'readonly') //no es necesario escribir "readonly" ya que este es el valor por defecto
        const objectStore = transaccion.objectStore('alumnos')
        const request = objectStore.openCursor()
        const fragment  = document.createDocumentFragment()

        request.onsuccess = (e) =>{
            
            const cursor = e.target.result
            if(cursor){
                const codEstudiante = document.createElement('p')
                codEstudiante.textContent = cursor.value.codEstudiante
                fragment.appendChild(codEstudiante)

                const apellidosEstudiante = document.createElement('p')
                apellidosEstudiante.textContent = cursor.value.apellidosEstudiante
                fragment.appendChild(apellidosEstudiante)
                
                const nombreEstudiante = document.createElement('p')
                nombreEstudiante.textContent = cursor.value.nombreEstudiante
                fragment.appendChild(nombreEstudiante)
                
                const gradoEstudiante = document.createElement('p')
                gradoEstudiante.textContent = cursor.value.gradoEstudiante
                fragment.appendChild(gradoEstudiante)
                
                console.dir(cursor.value)
                cursor.continue()
            }else{
                alumnosListado.textContent = ''
                alumnosListado.appendChild(fragment)
            }
            
        }
    }
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const data = {
            nombreEstudiante: e.target.alumno.value,
            apellidosEstudiante: e.target.apellido.value,
            gradoEstudiante: e.target.grado.value,
            codEstudiante: e.target.codigo.value
        }
        agregarDatos(data)
    })
}