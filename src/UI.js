import { projects, tabclick, addNewp, closeNewp, nproject, newtsk } from "./worker";

const modal2 = document.querySelector("#modal2");

const subtn = document.querySelector("#submit-nbook");
subtn.addEventListener("click", nproject);

const subtn2 = document.querySelector("#submit-nbook2");
subtn2.addEventListener("click", newtsk);

const ovlay = document.querySelector("#overlay");

const closemodalbtn = document.querySelectorAll("[data-close-button]");
closemodalbtn.forEach(btn => btn.addEventListener("click", closeNewp));

const Ptabs = document.querySelector("#ptab");

const Pbody = document.querySelector("#pbody");

let newbtn = document.createElement("button");
newbtn.classList.add("newbuttn");
newbtn.innerHTML = "ADD A TASK";
newbtn.addEventListener("click",addNewp);


let nban = document.createElement("div");
nban.classList.add("timebanner");

let shwproj = () => {
  Ptabs.innerHTML = "";

  let npro = document.createElement("button");
  npro.innerHTML = "ADD A PROJECT";
  npro.classList.add("nbtnpro");
  npro.addEventListener("click", addNewp);
  Ptabs.appendChild(npro);

  projects.forEach((el, i) => {
    let tab = document.createElement("div");
    tab.addEventListener("click", tabclick);
    tab.innerText = el.name;
    tab.dataset.info = i;
    
    tab.classList.add("tcard");
    Ptabs.appendChild(tab);
  });
};

let shwG = () => {
  projects[0].tasks.forEach((el) => {
    let card = document.createElement("div");
    card.innerHTML = `${el.name} ${el.ddate} ${el.desc} ${el.priority}`;
    card.classList.add("dcard");
    Pbody.appendChild(card);
  });
  nban.innerHTML = "Project Due Date: " + projects[0].ddate;
  Pbody.appendChild(nban);
  newbtn.dataset.info = 0;
  Pbody.appendChild(newbtn);
}

shwproj();
shwG();

export { Ptabs, Pbody, newbtn, nban, ovlay, shwproj };
