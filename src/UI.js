import { projects,tabclick } from "./worker";

const Ptabs =  document.querySelector("#ptab")
const Pbody =  document.querySelector("#pbody")

projects.forEach((el,i)=> {
    let tab = document.createElement("div");
    tab.addEventListener("click",tabclick)
    tab.innerText = el.name
    tab.dataset.info = i
    tab.classList.add("tcard")
    Ptabs.appendChild(tab);

})
Pbody.innerHTML = "SELECT A PROJECT";
let newbtn = document.createElement("button");
    newbtn.classList.add("newbuttn");
    newbtn.innerHTML = "+";
    Pbody.appendChild(newbtn);

export {Ptabs,Pbody}