import { projects,tabclick } from "./worker";

const Ptabs =  document.querySelector("#ptab")
const Pbody =  document.querySelector("#pbody")

projects.forEach((el,i)=> {
    let tab = document.createElement("div");
    tab.addEventListener("click",tabclick)
    tab.innerText = el.name
    tab.dataset.info = i
    Ptabs.appendChild(tab);

    el.tasks.forEach(task => {
        let card = document.createElement("div");
        card.innerHTML = `${task.name} ${task.ddate}`;
        Pbody.appendChild(card);
    })
})

export {Ptabs,Pbody}