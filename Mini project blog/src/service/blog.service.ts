import blogModel from "../model/blog.model"
import { EditBlog, IBlog, NewBlog } from "../types/types";

export default new class BlogService{
    private db = blogModel;
    public async Created(data:NewBlog):Promise<string>{
        return this.db.CreateBlog(data)
    }
    public async FechAllBlogs():Promise<IBlog[] |undefined>{
        return  this.db.GetAllblogs()
    }
    public async FechBlogByID(id:IBlog['id']):Promise<IBlog | undefined>{
        return this.db.GetBlogByID(id)
    }
    public async DeleteBlogs(id:IBlog['id']):Promise<string>{
        return this.
        db.RemoveBlogByID(id)
    }
    public async EditBlogs(id:IBlog['id'],newdata:EditBlog):Promise<string>{
        return this.db.EditBlogs(id,newdata)
    }
}