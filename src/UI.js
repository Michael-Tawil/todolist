import Project from'./projects'
const projects = [];
let G = new Project("General","24/4/25")
G.AddTask({task:1})
G.AddTask({task:12})
projects.push(G)
console.log(projects)
const Ptabs =  document.querySelector("#ptab")
const Pbody =  document.querySelector("#pbody")

projects.forEach((el,i)=> {
    
})