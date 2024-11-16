const input = document.querySelector('#nuevaTarea')
const boton = document.querySelector('#agregarTarea')
const parrafo_total = document.querySelector('.total')
const parrafo_realizadas = document.querySelector('.realizadas')
const ul = document.querySelector('#tareas')
const tareas = [
    {id:1731516529001, nombre:"tarea 1", realizada:false, check:""},
    {id:1731516529002, nombre:"tarea 2", realizada:false, check:""},
    {id:1731516529003, nombre:"tarea 3", realizada:false, check:""}
]

parrafo_total.innerHTML = tareas.length
parrafo_realizadas.innerHTML = 0
let realizadas = 0
renderTareas()

boton.addEventListener('click', ()=>{
    let nuevaTarea = {id:Date.now(),nombre:input.value, realizada:false, check:""}
    if (nuevaTarea.nombre != ""){
        tareas.push(nuevaTarea)
        input.value = ""
        renderTareas()
    }else{
        alert("Se requiere escribir una tarea")
    }    
})


function borrar(id){
    const index = tareas.findIndex((identif)=> identif.id == id)
    tareas.splice(index,1)
    console.log(index)
    renderTareas()
}

function renderTareas(){
    let html =""
    for(let tarea of tareas){
        html+=`
            <tr>
                <th>${tarea.id - 1731516529000}</th>
                <th class="nombre">${tarea.nombre}</th>
                <th><input id="check${tarea.id}" type="checkbox" onclick="chequear(${tarea.id})" ${tarea.check}/></th>
                <th><button type="button" class="btn-sm" onclick="borrar(${tarea.id})">Borrar</button></th>
            </tr>
        `   
    }
    ul.innerHTML = html
    parrafo_total.innerHTML = tareas.length
    parrafo_realizadas.innerHTML = contarRealizadas()
}

function chequear(id){
    const chequearTarea = tareas.find(tarea => tarea.id == id)
    if(chequearTarea.realizada == false){
        chequearTarea.realizada = true
        chequearTarea.check = "checked"
    }else {
        chequearTarea.realizada = false
        chequearTarea.check = ""
    }
    parrafo_realizadas.innerHTML = contarRealizadas()
    renderTareas()
}

function contarRealizadas (){
    const contarTareas = tareas.filter ( x => x.realizada == true)
    realizadas = contarTareas.length
    return realizadas
}