interface Interfacename{
frist_name:string,
last_name:string,
age:number,
email:string    
}
function newuser(person:Interfacename){
 return person   
}

let persondata:Interfacename={
frist_name:"zara",
last_name:"st",
age:0,
email:"zara.st@.com"    
}
console.log(newuser(persondata));