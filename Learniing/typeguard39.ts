type sometype =string |number | undefined;

type Person ={
    name:string;
    role:string;
    age:number
}
type Teacher= Person &{ //intersection
    teacherID:number
}
type Student =Person &{ //intersection
    studentID:number
}

let value :sometype

function setvalue(data:any){
    if(typeof data == "string"){
        value = "string data is " + data
    }else if(typeof data == "number"){
        value = "number data is" + data
    }else if(typeof data == "undefined"){
        value = "undefined data is " + data
    }
    else{
        throw typeof data + "invalid data"
    }
    console.log(value);
}

let persons:Person={name:"zara",age:8,role:"teacher"}
function Getperson(data: Student|Teacher){
    const props = Object.getOwnPropertyNames(data)
    let teacher:object ={teacherID: 8 , ...persons}, student :object = {studentID:5 , ...persons};
    const isteacher = props.every(prp=>prp in teacher)
    const isstudent = props.every(prp=>prp in student)
    if(isteacher) {
        console.log("thhis is a teacher");
    }else if(isstudent){
        console.log("this is a student");
    }else{
        console.log("data error");
    }
}
console.log(Getperson({...persons,teacherID:8}));
console.log(Getperson({...persons,studentID:8}));
