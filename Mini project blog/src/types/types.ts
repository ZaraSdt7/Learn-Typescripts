export interface IBlog{
    id:number
    title:string
    text:string
}
export interface IDatabase{ // type IBlog
    blogs:IBlog[]
}
 export type NewBlog = Omit<IBlog,'id'> // Except id 
 export type EditBlog = Partial<NewBlog>  //optional type
 