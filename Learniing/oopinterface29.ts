type IBlog={
    text:string,
    title:string,
    id:number,
    author:string
}

type UpdateBlog={
    text?:string,
    title?:string,
    id?:number,
    author?:string
    data?:string   
}

type Respanses={
    statuscode:number,
    message:string
}

interface InBlog{
    blogss:IBlog[];
    Create(blog:IBlog):Respanses;
    Update(id:number,data:UpdateBlog):Respanses;
    Delete(id:number):Respanses;
    GetBlog():IBlog[];
}

class Blog implements InBlog{
readonly blogss:IBlog[]=[];
Create(blog: IBlog): Respanses {
    return{
        statuscode:200,
        message:"create blog"
    }    
}
Update(id: number, data: UpdateBlog): Respanses {
    return{
        statuscode:200,
        message:"update blog"
    }
}
Delete(id: number): Respanses {
    return{
        statuscode:200,
        message:"delete blog"
    }
}
GetBlog(): IBlog[] {
    
return this.blogss
}

}

