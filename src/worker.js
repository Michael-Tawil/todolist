import Project from "./projects";
import Task from "./tasks";
import {
  Ptabs,
  Pbody,
  newbtn,
  nban,
  ovlay,
  shwproj,
  shwtasks,
  subtn2,
  subtn,
} from "./UI";

let projects = [];

if (!localStorage.getItem("projarr")) {
  projects = [];
  let G = new Project("General", "24/4/25");
  let N = new Project("new project", "23/4/55");

  G.AddTask("TASK1", "23/4/23", "LEarn HTML", "1");
  G.AddTask("TASK2", "24/4/23", "Learn JS", "2");
  G.AddTask("TASK3", "25/4/23", "Learn CSS", "2");
  N.AddTask("TASK 3", "25/5/23", "FIREBASE", "3");
  N.AddTask("Task 4", "29/5/23", "MONGODB", "4");
  projects.push(G);
  projects.push(N);
} else {
  projects = JSON.parse(localStorage.getItem("projarr"));
  projects.forEach((element) => {
    Object.setPrototypeOf(element, new Project());
  });
}

let addNewp = (e) => {
  if (e.target.classList.value === "nbtnpro") {
    modal.classList.add("active");
    ovlay.classList.add("active");
  } else if (e.target.classList.value === "newbuttn") {
    modal2.classList.add("active");
    ovlay.classList.add("active");
  } else if (e.target.classList.value == "dcard") {
    modal2.classList.add("active");
    ovlay.classList.add("active");
    subtn2.dataset.cnfo = e.target.dataset.cnfo;
    subtn2.removeEventListener("click", newtsk);
    subtn2.addEventListener("click", edittask);
  } else if (e.target.classList.value === "tcard") {
    modal.classList.add("active");
    ovlay.classList.add("active");
    subtn.removeEventListener("click", nproject);
    subtn.addEventListener("click", editproj);
  }
};

let closeNewp = () => {
  modal.classList.remove("active");
  modal2.classList.remove("active");
  ovlay.classList.remove("active");
  document.querySelector("form").reset();
  subtn2.addEventListener("click", newtsk);
  subtn2.removeEventListener("click", edittask);
  subtn.addEventListener("click", nproject);
  subtn.removeEventListener("click", editproj);
};

let nproject = (e) => {
  e.preventDefault();
  let title = document.querySelector("#projecttitle").value;
  let dtate = document.querySelector("#projectdate").value;
  projects.push(new Project(title, dtate));
  localStorage.setItem("projarr", JSON.stringify(projects));
  closeNewp();
  shwproj();
};

let newtsk = (e) => {
  e.preventDefault();
  let temp = document.querySelector(".newbuttn").dataset.info;
  console.log(temp);
  let tname = document.querySelector("#tasktitle").value;
  let tddate = document.querySelector("#taskdate").value;
  let tdesc = document.querySelector("#taskdesc").value;
  let tpriority = document.querySelector("#taskPriority").value;
  projects[temp].AddTask(tname, tddate, tdesc, tpriority);
  Pbody.innerHTML = "";
  localStorage.setItem("projarr", JSON.stringify(projects));
  shwtasks(temp);
  closeNewp();
};
let dtask = (e) => {
  let tempy = document.querySelector(".newbuttn").dataset.info;
  console.log(e);
  projects[tempy].RemoveTask(e.target.dataset.dinfo);
  console.log(e);
  Pbody.innerHTML = "";
  shwtasks(tempy);
  localStorage.setItem("projarr", JSON.stringify(projects));
};
let editproj = (e) => {
  e.preventDefault();
  let temp = document.querySelector(".newbuttn").dataset.info;
  let tname = document.querySelector("#projecttitle").value;
  let tddate = document.querySelector("#projectdate").value;
  projects[temp].SetName(tname);
  projects[temp].SetDate(tddate);
  shwproj();
  Pbody.innerHTML = "";
  shwtasks(temp);
  closeNewp();
  localStorage.setItem("projarr", JSON.stringify(projects));
};

let edittask = (e) => {
  e.preventDefault();
  let temp = document.querySelector(".newbuttn").dataset.info;
  let tempe = e.target.dataset.cnfo;
  console.log(tempe);
  let tname = document.querySelector("#tasktitle").value;
  let tddate = document.querySelector("#taskdate").value;
  let tdesc = document.querySelector("#taskdesc").value;
  let tpriority = document.querySelector("#taskPriority").value;
  projects[temp].SetTN(tempe, tname);
  projects[temp].SetTD(tempe, tddate);
  projects[temp].SetTDesc(tempe, tdesc);
  projects[temp].SetTP(tempe, tpriority);
  Pbody.innerHTML = "";
  shwtasks(temp);
  closeNewp();
  localStorage.setItem("projarr", JSON.stringify(projects));
};

export { projects, addNewp, closeNewp, nproject, newtsk, dtask, edittask };
