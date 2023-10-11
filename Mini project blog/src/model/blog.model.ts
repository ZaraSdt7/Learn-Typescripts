import { EditBlog, IBlog, IDatabase, NewBlog } from '../types/types';

export default new class DataBase{
    private state:IDatabase={
        blogs:[{id:1 , title:"Hello world" , text:"Programmer"}]
    } // data default
public async CreateBlog(data:NewBlog):Promise<string>{
    this.state.blogs.push({
        id:this.state.blogs.length + 1,
        title:data.title,
        text:data.text
    })
    return "Create Blog successfully"
}
public async GetAllblogs():Promise<IBlog[] | undefined>{
    return this.state.blogs
}
public async GetBlogByID(id:IBlog['id']):Promise<IBlog |undefined>{ //Find ID in IBlog
    return this.state.blogs.find(blog=>blog.id == id)
}
public async RemoveBlogByID(id:IBlog['id']):Promise<string>{
    if(!(await this.GetBlogByID(id))) return "BlogID  not found"
    this.state.blogs.forEach((blog,index)=>{
        if(blog.id == id){
            this.state.blogs.splice(index,1)
        }
    })
    return "Blog ID has removed"
}
public async EditBlogs(id:IBlog['id'],newdata:EditBlog):Promise<string>{
    if(!(await this.GetBlogByID(id))) return "BlogID not found";
    this.state.blogs.forEach((blog,index)=>{
        this.state.blogs[index] = Object.assign(blog,newdata) // target(blog), change value(newdata)
    })
    return "Edit blog has successfully"
}
}