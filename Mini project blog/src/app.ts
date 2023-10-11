import blogService from "./service/blog.service";

(async()=>{
    console.log(
        await blogService.Created({
            title:"You can do it",
            text:"Always u can do it!"
        })
    );
    console.log(
        await blogService.Created({
            title:"You can do it zahraaaaa",
            text:"Always u can do it!"
        })
    );
    console.log(
        await blogService.Created({
            title:"You can do it yessssss",
            text:"Always u can do it zahraaaaa!"
        })
    );
    console.log(
        await blogService.Created({
            title:"Youuuuuuuuuuu can do it",
            text:"Always u can do itttttttttt..😂😂😂😍😎"
        })
    );
    console.log(await blogService.FechAllBlogs());
    console.log(await blogService.FechBlogByID(3));
    console.log(await blogService.DeleteBlogs(1));
    console.log(await blogService.EditBlogs(5,{
        title:"youuu wooonnnnn",
        text:"yessssss you wooonnnn.😎😋"
    }));
    console.log(await blogService.FechBlogByID(5));
})()