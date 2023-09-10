function SayHello(frist_name?:string,last_name?:string):void{
    console.log(`Hi ${frist_name} ${last_name} welcome`);

}
SayHello("zara","st");

///////////////

let blog:{
title:string,
text:string,
likes:number,
author:object,
comment?:object[]    
}

blog={
    title:"new title",
    text:"new text",
    likes:5,
    author:{name:"zara"},
    comment:[]
}
console.log(blog);