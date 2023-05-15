import Task from "./tasks";
export default class Project{
    constructor(name,ddate){
        this.name = name;
        this.ddate = ddate;
        this.tasks = [];
    }
    GetName = () => this.name;
    SetName =(nname) => this.name = nname;
    
    AddTask = (name,ddate,desc,priority) => {
        let newtask = new Task(name,ddate,desc,priority);
        this.tasks.push(newtask);
    }
    RemoveTask = (rtask) => {
        let temp = this.tasks.findIndex(el => el.name === rtask);
        this.tasks.splice(temp,1);
    }
    SetTName =(nname,newn) => {
        let tempt = this.tasks.findIndex(el => el.name === nname);
        console.log(tempt)
        this.tasks[tempt].name = newn;
    }

}
