import Project from'./projects'

const projects = [];
let G = new Project("General","24/4/25")
G.AddTask("num1","23/4/66")
G.AddTask("num2","23/4/66")

projects.push(G)

export {projects}