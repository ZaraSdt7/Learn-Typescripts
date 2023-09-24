import { time } from "node:console"
import { todo } from "node:test"

enum STATE{
PENDING="pending",    
DONE="done",
CANCEL="cancel"    
}

type Todo={
id:number
title:string
state:STATE
}

type CreatedTodoDTO={
title:string
state:STATE    
}
type Responses={
    message:string
}

interface ITodo{
Created(todo:CreatedTodoDTO):void;
Delete(id:number ) :void;
GetbyID(id:number):void;
GetList():void   
}

abstract class ToDoRepository implements ITodo{
protected Todos:Todo[]
constructor(){
    this.Todos =[]
}    
Created(todo: CreatedTodoDTO): void {
    
}
Delete(id: number): void {
    
}
GetList(): void {
    
}
GetbyID(id: number): void {
    
}
}
class TODILIST extends ToDoRepository{
    protected static self:TODILIST;
    public readonly Classname:string;
    protected  _SetID:number
    constructor(){
        super()
        TODILIST.self = this
        this._SetID = this.Todos.length
        this.Classname = "todolist"
    }
//public static GetstateID():number{
 //eturn TODILIST.SetID   
//}    
get StateID():number{
 if(this._SetID) return this._SetID
 else return 0    
}
set StateID(value:number){
if(typeof value === "number" && value>0 && value>= this.Todos.length){
    this._SetID = value

} 
else console.log("typeof value is not NUMBER");   
}
public Created(todo: CreatedTodoDTO): Responses {
const id = this.Todos.length +1
const newtodo:Todo={
id,
title:todo.title,
state:todo.state
}    
this.Todos.push(newtodo)
this._SetID = id
return  {message:"created todo"} 


}    
public static countoftodo():number{
    return TODILIST.self.Todos.length;
}
GetList(): Todo[] {
return this.Todos    
}
GetbyID(id: number):Todo| Responses {
const todoo = this.Todos.find(td=>td.id == id)
if(todoo) return todoo
return {message:" id not found"}    
}
Delete(id: number): Responses {
const deltodo = this.Todos.filter(fil=>fil.id !== id)
this.Todos=deltodo
return {message:"remove todo"}    
}
}

const newtd = new TODILIST();
//console.log(newtd.Created({title:"first",state:STATE.PENDING}));
console.log(newtd.Created({title:"second",state:STATE.DONE}));
console.log((newtd.Created({title:"tird",state:STATE.CANCEL})));
console.log((newtd.Created({title:"forth",state:STATE.PENDING})));
//console.log(newtd.GetbyID(1));
//console.log(newtd.Delete(1));
//console.log(newtd.GetbyID(1));
console.log(newtd.StateID);
console.log(TODILIST.countoftodo());
console.log(newtd.Classname);
//console.log(newtd.GetbyID(1));