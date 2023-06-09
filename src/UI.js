import {
  projects,
  addNewp,
  closeNewp,
  nproject,
  newtsk,
  dtask,
  edittask,
} from "./worker";

const modal2 = document.querySelector("#modal2");

const subtn = document.querySelector("#submit-nbook");
subtn.addEventListener("click", nproject);

const subtn2 = document.querySelector("#submit-nbook2");
subtn2.addEventListener("click", newtsk);

const ovlay = document.querySelector("#overlay");

const closeforms = document.querySelectorAll(".close-button");
closeforms.forEach((btn) => btn.addEventListener("click", closeNewp));

const Ptabs = document.querySelector("#ptab");

const Pbody = document.querySelector("#pbody");

let newbtn = document.createElement("button");
newbtn.classList.add("newbuttn");
newbtn.innerHTML = "ADD A TASK";
newbtn.addEventListener("click", addNewp);

let nban = document.createElement("div");
nban.classList.add("timebanner");

let shwtasks = (temp) => {
  if (projects[temp].tasks.length == 0) {
    newbtn.dataset.info = temp;
    Pbody.appendChild(newbtn);
    nban.innerHTML = "Project Due Date: " + projects[temp].ddate;
    Pbody.appendChild(nban);
  } else {
    projects[temp].tasks.forEach((el, i) => {
      let card = document.createElement("div");
      let ncard = document.createElement("h3");
      let dcard = document.createElement("h4");
      let descard = document.createElement("p");
      let pcard = document.createElement("h4");
      ncard.innerText = `${el.name}`;
      dcard.innerText = `${el.ddate}`;
      descard.innerText = `${el.desc}`;
      pcard.innerText = `${el.priority}`;
      card.classList.add("dcard");
      let delcard = document.createElement("button");
      delcard.addEventListener("click", dtask);
      delcard.innerHTML = "Delete";
      delcard.dataset.dinfo = i;
      card.dataset.cnfo = i;
      card.addEventListener("dblclick", addNewp);
      delcard.classList.add("delcards");
      Pbody.appendChild(card);
      card.appendChild(ncard);
      card.appendChild(dcard);
      card.appendChild(descard);
      card.appendChild(pcard);
      card.appendChild(delcard);
      newbtn.dataset.info = temp;
      Pbody.appendChild(newbtn);
      nban.innerHTML = "Project Due Date: " + projects[temp].ddate;
      Pbody.appendChild(nban);
      if (el.priority == "1") {
        card.style.backgroundColor = "#ff4545";
      }
    });
  }
};
let tabclick = (e) => {
  let inof = e.target.dataset.info;
  Pbody.innerHTML = "";
  shwtasks(inof);
};
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
    tab.addEventListener("dblclick", addNewp);
    tab.addEventListener("contextmenu", function (e) {
      e.preventDefault();
      projects.splice(e.target.dataset.info, 1);
      shwproj();
      Pbody.innerHTML = "PROJECT DELETED";
      localStorage.setItem("projarr", JSON.stringify(projects));
    });
    tab.innerText = el.name;
    tab.dataset.info = i;
    tab.classList.add("tcard");
    Ptabs.appendChild(tab);
  });
};

let shwpri = () => {
  projects.forEach((pro, i) =>
    pro.tasks.forEach((el) => {
      if (el.priority == "1") {
        let card = document.createElement("div");
        let ncard = document.createElement("h3");
        let dcard = document.createElement("h4");
        let descard = document.createElement("p");
        let pcard = document.createElement("h4");
        ncard.innerText = `${el.name}`;
        dcard.innerText = `${el.ddate}`;
        descard.innerText = `${el.desc}`;
        pcard.innerText = `${el.priority}`;
        card.classList.add("dcard");
        let delcard = document.createElement("button");
        delcard.addEventListener("click", dtask);
        delcard.innerHTML = "Delete";
        delcard.dataset.dinfo = i;
        card.dataset.cnfo = i;
        card.addEventListener("dblclick", addNewp);
        delcard.classList.add("delcards");
        Pbody.appendChild(card);
        card.appendChild(ncard);
        card.appendChild(dcard);
        card.appendChild(descard);
        card.appendChild(pcard);
        card.style.backgroundColor = "#ff4545";
      }
    })
  );
};

shwpri();
shwproj();

export { Ptabs, Pbody, newbtn, nban, ovlay, shwproj, shwtasks, subtn2, subtn };
