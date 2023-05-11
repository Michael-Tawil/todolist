import { projects } from "./worker";

const Ptabs =  document.querySelector("#ptab")
const Pbody =  document.querySelector("#pbody")

projects.forEach(el=> {
    let tab = document.createElement("div");
    tab.innerText = el.name
    Ptabs.appendChild(tab);

    el.tasks.forEach(task => {
        let card = document.createElement("div");
        card.innerHTML = `${task.name} ${task.ddate}`;
        Pbody.appendChild(card);
    })
})