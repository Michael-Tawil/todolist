import './tasks'
export default class Project{
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
