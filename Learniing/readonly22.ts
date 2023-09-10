//یک خصوصیتی که به یک پراپرتی و یا اینتفیس میدیم و نمیتوانیم آن را تغییر بدیم.

interface Iblog{
readonly title:string,
readonly text:string    
}

function createblog(blog:Iblog):Iblog{
return  blog
}
//blog.text="one" // readonly
const blog = createblog({text:"text one",title:"title one"})
console.log(blog);


