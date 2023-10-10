//method decorator

function MethodDecorator(state:boolean){
    return function(target:object , propertykey:string , Descriptor:PropertyDescriptor){
        Descriptor.enumerable = true
      const mainmethod = Descriptor.value;
      console.log(Descriptor); 
      Descriptor.value = function(...args:any[]){
        const[fristarg,secondarg] = args
        if(fristarg && typeof fristarg == "string"){
            console.log("decorator frist args");
            args[0] = fristarg + "=>changed"
            return mainmethod.apply(this,args)
        }else{
            console.log("decorator cant get first args");
            args[0] = fristarg + "=>changed"
            return mainmethod.apply(this,args)
        }
      }
    }
}
class MyClass{
    @MethodDecorator(true)
    SomeMethod(arg:string){
        return "called some method"
    }

}

const myclass = new MyClass()
console.log(myclass.SomeMethod(""));

////////////////////////////////////////////////////////////
//2 method decoratorrr

function Logs(targets:any , propertieskey:string , decorators:PropertyDescriptor ){
    const orginalmethod = decorators.value
    decorators.value= function(...arg:any[]){
        console.log(`Calling ${propertieskey} with parametrs:${arg}`); //  calling method class
        const result = orginalmethod.apply(this,arg)
        console.log(`Calling ${propertieskey} with result ${result}`); // calling method class
        return result
    }
}
class Greeter{
    @Logs
    Greet(myname:string):string{
        return  `Hello ${myname}`
    }
}
const greet = new Greeter();
console.log(greet.Greet("zara"));