import Task from "./tasks";
export default class Project {
  constructor(name, ddate) {
    this.name = name;
    this.ddate = ddate;
    this.tasks = [];
  }
  GetName = () => this.name;
  SetName(nname){this.name = nname}
  
  SetDate(date){this.ddate = date}

  AddTask(name, ddate, desc, priority){
    let newtask = new Task(name, ddate, desc, priority);
    this.tasks.push(newtask);
  };
  RemoveTask(temp){
    
    this.tasks.splice(temp, 1);
  };
  SetTN(cinfo, newn){
  
    this.tasks[cinfo].name = newn;
  };
  SetTD(cinfo, ndd){
    
    this.tasks[cinfo].ddate = ndd;
  };
  SetTDesc(cinfo, ndesc){
    
    this.tasks[cinfo].desc = ndesc;
  };
  
  SetTP(cinfo, pri){
    
    this.tasks[cinfo].priority = pri;
  };
}
