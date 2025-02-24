
import {
    db, collection, addDoc, getDocs
} from './firebase.js'




// all tag target 
let taskname = document.getElementById('taskname')
let taskdesc = document.getElementById('taskdesc')
let taskstartdate = document.getElementById('taskstartdate')
let taskenddate = document.getElementById('taskenddate')
let taskul = document.getElementById('taskul')

var taskert = document.getElementById("tasktitle")
var taskerdescrip = document.getElementById("taskdescriptin")

const task = []
const getdatainfirebase = await getDocs(collection(db, "task"));

async function tasksubmit() {

    if (!taskname.value || !taskdesc.value || !taskenddate.value || !taskstartdate.value) {
        alert("please fill out all fields !")
        return

    }

    const usertask = {
        task: taskname.value,
        taskDescription: taskdesc.value,
        startdate: taskstartdate.value,
        enddate: taskenddate.value,
    }


    const adddatainfirebase = await addDoc(collection(db, 'task'), usertask)
    console.log(adddatainfirebase)
    alert("task add successfully")

   

    taskname.value = '';
    taskdesc.value = '';
    taskenddate.value = '';
    taskstartdate.value = '';

    gettask()

}

let repo = document.getElementById('repos')

const dater = new Date()
console.log(dater)


// for (let i = 0; i < 365; i++) {
//     repo.innerHTML += `<span></span>`
// }
window.tasksubmit = tasksubmit



async function dynamicrute(e) {
    console.log(e)
    getdatainfirebase.forEach((doc) => {
        //console.log(`${doc.id} => ${doc.data()}`);
if (e == doc.id) {
    taskert.innerText = doc.data().task
    taskerdescrip.innerText = doc.data().taskDescription

    alert('data match')
   return 
}

    });
}
// get data
async function gettask() {


  


    taskul.innerHTML = ''
let taskdata;
    getdatainfirebase.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().task}`);

        taskdata = doc.data()

        taskul.innerHTML += `
        <li>
        <div class="taskname">
        ${taskdata.task}
        </div>
        <div class="options">
        <button  onclick="dynamicrute('${doc.id}')">manage</button>
        </div>
        </li>`
    });
}

gettask()


window.dynamicrute = dynamicrute


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


