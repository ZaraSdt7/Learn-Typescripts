let product:Array<{title:string,img:string,price:number,discount:number | undefined,count:number}>;
let payment:{productamount:number,getway:string};
let basket:{
    product:Array<{title:string,img:string,price:number,discount:number | undefined,count:number}>;
    payment:{productamount:number,getway:string};
}

basket={
    product:[{
        title:"xiaomi mobile",
        img:"htpps://ffffff",
        discount:500,
        count:5000,
        price:700000

    }],
    payment:{
        productamount:45000,
        getway:"zarinpal"
    }
}
console.log(basket);