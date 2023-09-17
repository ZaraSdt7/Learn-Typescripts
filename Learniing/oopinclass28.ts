type Infouser={
name:string,
user_name:string,
password:number
}

type Respons={
statuscode:number ,
message:string     
}
class Send{
    public Sendsms(message:string):void{
        console.log("send message:", message);
    }
}

class Authentication extends Send{
private Users:Infouser[] = []; //چون از constractur  استفاده نمیکنیم یک رایه خالی بهش پاس میدیم    

register(name:string,user_name:string,password:number) :Respons {
    this.Users.push({
        name,
        user_name,
        password
    })
    this.Sendsms("welcome")
    return{
        statuscode:200,
        message:"user register successfully"
    }
}
login(user_name:string,password:number) :Infouser | Respons{
    const usee:Infouser |undefined = this.Users.find(username=>username.user_name == user_name)
    if(!usee) return {message:"user not found" ,statuscode:401}
    if(usee.password!==password) return{message:"user_name or password incorrect" ,statuscode:400}
    return usee
}

Getallusers():Infouser[]{
    return this.Users
}
}

const auth = new Authentication()
console.log((auth.register("zara","zarast",1234)));
console.log(auth.register("arman","armani",4444));
console.log(auth.Getallusers());
console.log(auth.login("zarast",12345));