enum PROVINE{
SARI="sari",
TEHRAN="tehhran"
}
enum Sari{
    sari,
    babol,
    shahi
}

type tehran = "tehran"|"karaj"
type sari = "sari" | "shahi"


type Detail={
    name?:string
}

type Security ={
token?:string;
password:number
refreshtoken:string
}

type Contact={
mobile:number
email:string
}
type Address ={
province:PROVINE.SARI
city:tehran|sari
street:string
allay:string

}

interface User{
id:number    
detail:Detail
security:Security
contact:Contact
address:Address    
}

// type users=Detail & Contact & Address &Contact ={

// }

const user :User={
id:1,
detail:{
    name:"zara"
},   
security:{
    token:"dfhdkjfhsdkjfh",
    password:587590876,
    refreshtoken:"fd;slkfhsdfh"
}, 
contact:{
mobile:498349749,
email:"zahddjfh@dkfj"    
},
address:{
    province:PROVINE.SARI,
    city:"sari" ,
    street:"sari andishe",
    allay:"sarvi"

}
}
console.log(user);