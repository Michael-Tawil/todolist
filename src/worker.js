import Project from'./projects'
import {Ptabs,Pbody} from './UI'

const projects = [];
let G = new Project("General","24/4/25")
let N = new Project("new project","23/4/55")
G.AddTask("num1","23/4/66")
G.AddTask("num2","23/4/66")
N.AddTask("num3","23/4/66")
N.AddTask("num4","23/4/66")
projects.push(G)
projects.push(N)

let tabclick = (e)=> {
    let inof = e.target.dataset.info;
    Pbody.innerHTML = "";
    projects[inof].tasks.forEach(el => {
        let card = document.createElement("div");
        card.innerHTML = `${el.name} ${el.ddate}`;
        Pbody.appendChild(card);
    });

}

export {projects,tabclick}