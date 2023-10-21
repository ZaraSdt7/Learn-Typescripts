type ICourse ={
    id:number
    title:string
    teacher:string
}
type edit = Partial<ICourse>
type requiredcourse = Required<edit>
type read = Readonly<ICourse>
class Course{
    Addcourse(course:ICourse){}
    Editcourse(course:edit){}
    Getallcourse():read[]{
        return []
    }
}
type Title = "nodejs" | "typescript" | "javascript";  //Literal types
type Courses = Record<Title,ICourse>;
const Acourse :Courses ={
nodejs:{
id:1,
title:"nodejs",
teacher:"aaaa"
},
typescript:{
id:2,
title:"typescript",
teacher:"bbb"
},
javascript:{
id:3,
title:"javascript",
teacher:"ccc"
}
}
console.log(Acourse);