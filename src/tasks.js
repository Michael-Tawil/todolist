export default class Task {
    constructor(name,ddate,desc,priority){
        this.name = name;
        this.ddate = ddate;
        this.desc = desc;
        this.priority = priority
    }
    GetName = () => this.name;
    SetName =(nname) => this.name = nname;
    Getddate = () => this.ddate;
    Setddate =(nddate) => this.name = nddate;
    Getdesc = () => this.desc;
    Setdesc=(ndesc) => this.desc = ndesc;
    Getpriority = () => this.priority;
    Setpriority=(npriority) => this.priority = npriority;
}