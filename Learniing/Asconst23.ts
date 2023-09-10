const myinfo:object={  // we just put object in as const and if put any in this function we can change value and we wont used any in code.     
fullname:"zara sdt",
agez:8,
password:"fsdkjgkdj"    
} as const

const numberss=[1,2,3] as const
console.log(numberss[2]); // in  as const array we access index array [];
console.log(myinfo);
