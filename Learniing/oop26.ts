type profile={
names:string,
age:number,
mobile:number    
}

type Editprofiles={
names?:string | undefined,
age?:number | undefined,
mobile?:number | undefined    
}

class User{
     private names:string
     protected age:number
    protected mobile:number

   constructor(names:string,age:number,mobile:number){
    this.names = names;
    this.age = age;
    this.mobile = mobile
   }
   Getuserprofile():profile{
    return{
        names:this.names,
        age:this.age,
        mobile:this.mobile
    }
   }
   Edituserprofile(profileobj:Editprofiles):Editprofiles{
    if(profileobj.age){
        this.age= profileobj.age
    }
    if(profileobj.mobile){
        this.mobile = profileobj.mobile
    }
    if(profileobj.names){
        this.names = profileobj.names
    }
    return{
        names:this.names,
        age:this.age,
        mobile:this.mobile
    }
   }
} 

const user1 = new User("zara",54,936309344)
user1.Edituserprofile({age:8}) // when we used the protected or private we cant cheanged  method class!!
console.log(user1.Getuserprofile());