enum eventstype{
SPORT="sport",
WIN="win"
}
type ID= string |number

type events={
  names:string,
  datecreated:Date,
  type:eventstype  
}
type userevent = events &{ // inharitance
    usersids:ID
}
let userevent1:userevent={
    names:"zara",
    datecreated:new Date(),
    type:eventstype.SPORT,
    usersids:1
}
console.log(userevent1);