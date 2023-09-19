interface Iuser{
    mobile:number,
    id:number,
    email:string,
    name:string,
    nationalCode:number| null
}
class Auser implements Iuser{
 id:number= 144555
 email:string= "zara.st@fdf.com"
 name:string= "zara"
 mobile:number= 934994949
 private nationalID:number | null = null;

 get nationalCode():number | null{
    return this.nationalID
 }
 
 public set nationalCode(value : number | null) {
    if(value){
        this.nationalID = value
    }
 }
 

}

const zara = new Auser();
zara.nationalCode = 145555
console.log(zara.nationalCode);