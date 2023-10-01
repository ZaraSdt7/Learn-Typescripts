import { log } from "console"

const func1 = <z>(foo:z):z=>{
    return foo
}
console.log(func1<string>("hello"));
console.log(func1<number>(3333));
/////////////////////////////////////////////////
//41
function Addition<t1,t2>(value1:t1,value2:t2):any{
if( typeof value1 == "string" &&  typeof value2 == "string"){
    return value1.concat(value2)
}
if(typeof value1 == "number" && typeof value2 == "number"){
    return value1 + value2
}
else{
    return {value1,value2}
}
}
console.log(Addition("zara","st"));
console.log(Addition(2,7));
////////////////////////////////////////////////////////////////
//42
// type User={}
// type Blog ={}
// type Comments = {}
//  async function fechapi<Resulttype>(path:string):Promise<Resulttype>{
// const response = await fetch(`https://google.com${path}`)
// return response.json()

//}
// const blog :Promise<Blog[]>=fechapi<Blog[]>("/blogs")
// const user:Promise<User[]> = fechapi<User[]>("/user")
// const coment:Promise<Comments[]> = fechapi<Comments[]>("/comemnt")
///////////////////////////////////////////////////////////////////////
//43
 function Mergy<T1 extends object  , T2 extends object>(arg1:T1,arg2:T2){
    return {...arg1,...arg2}
 }
 console.log(Mergy<object|any,object>({names:"zara",age:2},{id:2,email:"dfggfdg"}));
 
 type Employee ={
    id:number
    names:string
    email:string //keyof
    age:number
 }
 function getonjectfilter<Z extends Employee , K extends keyof Z>(obj:Z , keys:K[]){
    let filter:any ={}
    for(const key of keys){
        filter[key] = obj[key]
    }
    return filter
 }
 const employee :Employee ={
  id:1,
  names:"zara",
  email:"dfdfdfd",
  age:66
 }
 console.log(getonjectfilter(employee,["age","email","names","id"]));
