enum STEP{
zero,
first,
second,
third    
}
console.log(STEP.first);

enum USER_PAYMENT{
PENDING="pending",
SUCCESS="success",
ERROR="error",
INFO="info"        
}
enum USER_STATUS{
TRUE=1,
FALSE=0    
}

let user1:object={
name:"zara",
age:0,
status:USER_STATUS.TRUE,
user_pay:USER_PAYMENT.SUCCESS
}
console.log(user1);