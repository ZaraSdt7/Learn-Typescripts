type userinfo= string | number | null;
type baskets={
products:userinfo[], //type userinfo
discounts?:number    
}

type users1={
names:string,
family:string,
ages:number,
baskt:baskets

}

function getusers(userid:userinfo):users1{
 return {
    names:"zara",
    family:"st",
    ages:0,
    baskt:{
        products:[1,"2","ffff",55],
        discounts:44
    }
}

}
console.log(getusers)
