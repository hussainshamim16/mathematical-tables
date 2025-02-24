let workdate = new Date()
let updatedate =[ workdate.getDate(),workdate.getMonth(),workdate.getFullYear() ]
let updatetime =workdate.toTimeString()

let today = ()=>{
    const desctask = prompt("today task description")

    if (!desctask) {
        alert("description is required")

        return
    }

    const todaytask = {
        date : updatedate,
        desciption: desctask,
        time: updatetime.slice(0,8)
    }
    console.log(todaytask)
}

let compelete = (e)=>{
    alert("task was compelete")
    e.innerHTML='cencel'
}
let taskdel = (e)=>{
    alert("task was deleted")
}

var taskert = document.getElementById("tasktitle")
var taskerdescrip = document.getElementById("taskdescriptin")
const edit=()=>{
    let tasktitle = prompt('task title',taskert.innerText)
    let taskdesc = prompt('task description',taskerdescrip.innerText)

    const edit = {
        title : !tasktitle?taskert.innerText:tasktitle,
        description : !taskdesc?taskerdescrip.innerText:taskdesc,
    }
    console.log(edit)
}

window.edit = edit 
window.taskdel = taskdel 
window.compelete = compelete 
window.today = today 