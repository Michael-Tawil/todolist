import './tasks'
const projects = []

class Project{
    constructor(name,ddate){
        this.name = name;
        this.ddate = ddate;
        this.tasks = [];
    }
    GetName = () => this.name;
    SetName =(nname) => this.name = nname;
    AddTask = (task) => this.tasks.push(task);
    RemoveTask = (rtask) => {
        let temp = this.tasks.findIndex(el => el.task === rtask);
        this.tasks.splice(temp,1);
    }

}
let G = new Project("General","24/4/25")
G.SetName("khara")
G.AddTask({task:1})
G.AddTask({task:12})
console.log(G.tasks)