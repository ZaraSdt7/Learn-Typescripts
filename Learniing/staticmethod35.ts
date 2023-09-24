class Usercontroller{
private static Users:object[] =[]
static GetUser():object[]{
    Usercontroller.Users.push({
        id:1,
        name:"zara",
        age:8
    })
    return Usercontroller.Users
}    
}
console.log(Usercontroller.GetUser());