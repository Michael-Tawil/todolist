import Project from "./projects";
import Task from "./tasks";
import { Ptabs, Pbody, newbtn, nban, ovlay, shwproj,shwtasks,subtn2 } from "./UI";

let projects = [];

if (!localStorage.getItem("projarr")){
  projects = [];
  let G = new Project("General", "24/4/25");
  let N = new Project("new project", "23/4/55");

  G.AddTask("TASK1", "23/4/23", "dosomething1", "1");
  G.AddTask("TASK2", "24/4/23", "dosomething1", "2");
  G.AddTask("TASK3", "25/4/23", "dosomething1", "2");
  G.AddTask("TASK4", "26/4/23", "dosomething1", "3");
  G.AddTask("TASK5", "27/4/23", "dosomething1", "4");
  G.AddTask("TASK6", "28/4/23", "dosomething1", "5");
  G.AddTask("TASK7", "29/4/23", "dosomething1", "61");
  G.AddTask("TASK8", "30/4/23", "dosomething1", "1");
  G.AddTask("TASK9", "31/4/23", "dosomething1", "5");
  G.AddTask("TASK10", "01/4/23", "dosomething1", "5");
  G.AddTask("TASK11", "02/4/23", "dosomething1", "5");
  G.AddTask("TASK12", "03/4/23", "dosomething1", "1");
  N.AddTask("TASK 3", "25/5/23", "dosomething3", "3");
  N.AddTask("Task 4", "29/5/23", "dosomething4", "4");
  projects.push(G);
  projects.push(N);
}else{
  projects = localStorage.getItem("projarr");
}





let addNewp = (e) => {
 

  if (e.target.classList.value === "nbtnpro") {
    modal.classList.add("active");
    ovlay.classList.add("active");
  } else if (e.target.classList.value === "newbuttn") {
    modal2.classList.add("active");
    ovlay.classList.add("active");
  }else if (e.target.classList.value == "dcard"){
    modal2.classList.add("active");
    ovlay.classList.add("active");
    subtn2.dataset.cnfo = e.target.dataset.cnfo;
    subtn2.removeEventListener("click",newtsk)
    subtn2.addEventListener("click",edittask)
  }
};

let closeNewp = () => {
  modal.classList.remove("active");
  modal2.classList.remove("active");
  ovlay.classList.remove("active");
  document.querySelector("form").reset();
  subtn2.addEventListener("click",newtsk)
  subtn2.removeEventListener("click",edittask)
};

let nproject = (e) => {
 
  e.preventDefault();
  let title = document.querySelector("#projecttitle").value;
  let dtate = document.querySelector("#projectdate").value;
  projects.push(new Project(title, dtate));
  closeNewp();
  shwproj();
};

let newtsk = (e) => {
  e.preventDefault();
  let temp = document.querySelector(".newbuttn").dataset.info;
  console.log(temp)
  let tname = document.querySelector("#tasktitle").value;
  let tddate = document.querySelector("#taskdate").value;
  let tdesc = document.querySelector("#taskdesc").value;
  let tpriority = document.querySelector("#taskPriority").value;
  projects[temp].AddTask(tname,tddate,tdesc,tpriority);
  Pbody.innerHTML = "";
  shwtasks(temp)
  closeNewp();
}
let dtask = (e) =>{
  let tempy = document.querySelector(".newbuttn").dataset.info;
  console.log(e)
  projects[tempy].RemoveTask(e.target.dataset.dinfo);
  console.log(e)
  Pbody.innerHTML = "";
  shwtasks(tempy)
}

let edittask = (e) =>{

  e.preventDefault();
  let temp = document.querySelector(".newbuttn").dataset.info;
  let tempe = e.target.dataset.cnfo;
  console.log(tempe)
  let tname = document.querySelector("#tasktitle").value;
  let tddate = document.querySelector("#taskdate").value;
  let tdesc = document.querySelector("#taskdesc").value;
  let tpriority = document.querySelector("#taskPriority").value;
  projects[temp].SetTN(tempe,tname);
  projects[temp].SetTD(tempe,tddate);
  projects[temp].SetTDesc(tempe,tdesc);
  projects[temp].SetTP(tempe,tpriority);
  Pbody.innerHTML = "";
  shwtasks(temp)
  closeNewp();

}

export { projects, addNewp, closeNewp, nproject,newtsk, dtask, edittask };
