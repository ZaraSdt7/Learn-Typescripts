// fuction in typescript

function sum(x:number,y:number):number{
return x + y;
}
const result = sum(2,3)
console.log(result);

function logger(value:any):void{
console.log(value);    
}
logger("zara")
//////////////////////////////
function getname(firstname:string,lastname:string):String{
return `Hello ${firstname},${lastname}`
}
logger(getname("zara","sdt"))
/////////////////////////////////////////
function gettime():Date{
return new Date();    
}
logger(gettime());
////////////////////////////////
//Arrays

function getkeys(obj:object):string[]{
const keys:Array<string>=Object.keys(obj)
return keys;    
}

const user={
 name:"zara",
 age:0,
 skill:"programmer"   
}
let number:Array<number>=[1,2,3]
console.log(getkeys(user));
console.log(number);
////////////////////////////////////////////