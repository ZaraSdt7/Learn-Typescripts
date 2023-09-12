//3 function that  get entire diffrent values and same out values

function makedate(date:string):Date;
function makedate(tiestamp:number):Date;
function makedate(year:number,month:number,day:number):Date
function makedate(DTY:string|number,month?:number,day?:number):Date{
if(DTY && !month && !day){
    return new Date(DTY)
} else{
    return new Date(+DTY,month ||1 , day ||1)
}   
}
console.log(makedate(Date.now()));

///////////////////////////////////////

interface UserID{
 id:number,
 fullname:string,
 age:number   
}
const users:UserID[]=[{
id:777,
fullname:"zara",
age:8    
}
]

function getuserid(id:number):UserID | undefined{
return users.find(user=>user.id==id)
}
function getuserbyname(fullname:string):UserID | undefined{
    return users.find(name=>name.fullname == fullname)
}
function getuserbyage(age:number):UserID | undefined{
    return users.find(ages=>ages.age == age)
}
function getuser(arg:number|string):UserID | undefined {
    return users.find(args=>args.id == arg)
}