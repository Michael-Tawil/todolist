import Project from'./projects'
import Task from './tasks';
import {Ptabs,Pbody,newbtn,nban,ovlay,shwproj} from './UI'

const projects = [];
let G = new Project("General","24/4/25")
let N = new Project("new project","23/4/55")
let M = new Project("max ","83/4/55")
G.AddTask("TASK1","23/4/23","dosomething1","1")
G.AddTask("TASK2","24/4/23","dosomething1","1")
G.AddTask("TASK3","25/4/23","dosomething1","1")
G.AddTask("TASK4","26/4/23","dosomething1","1")
G.AddTask("TASK5","27/4/23","dosomething1","1")
G.AddTask("TASK6","28/4/23","dosomething1","1")
G.AddTask("TASK7","29/4/23","dosomething1","1")
G.AddTask("TASK8","30/4/23","dosomething1","1")
G.AddTask("TASK9","31/4/23","dosomething1","1")
G.AddTask("TASK10","01/4/23","dosomething1","1")
G.AddTask("TASK11","02/4/23","dosomething1","1")
G.AddTask("TASK12","03/4/23","dosomething1","1")
G.AddTask("TASK 2","22/5/23","dosomething2","2")
N.AddTask("TASK 3","25/5/23","dosomething3","3")
N.AddTask("Task 4","29/5/23","dosomething4","4")
projects.push(G)
projects.push(N)
G.SetTDesc("TASK1","do this now bro")
G.SetTP("TASK1",4)
console.log(G)

let tabclick = (e)=> {

    let inof = e.target.dataset.info;
    Pbody.innerHTML = "";
    Pbody.appendChild(newbtn);
    nban.innerHTML = "Project Due Date: "+ projects[inof].ddate;
    Pbody.appendChild(nban);
    projects[inof].tasks.forEach(el => {
        let card = document.createElement("div");
        card.innerHTML = `${el.name} ${el.ddate} ${el.desc} ${el.priority}`;
        card.classList.add("dcard");
        Pbody.appendChild(card);
    });

}
let addNewp = (e) => {
    console.log(e.target.classList.value);

    if (e.target.classList.value === "nbtnpro"){
        modal.classList.add("active");
        ovlay.classList.add("active");
    }else if (e.target.classList.value === "newbuttn") {
        
    }
}

let closeNewp = (e) => {
    
    modal.classList.remove("active");
    ovlay.classList.remove("active");
    document.querySelector("form").reset();
}

let nproject = (e) => {
    e.preventDefault();
    let title = document.querySelector("#projecttitle").value;
    let dtate  = document.querySelector("#projectdate").value;
    projects.push(new Project(title,dtate));
    closeNewp()
    shwproj()
}

export {projects,tabclick,addNewp,closeNewp,nproject}