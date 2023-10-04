
type Propertyoption={
    min?:number
    max?:number
    default?:string | number
    Errormessage?:string
}
function Property(options:Propertyoption = {}){
    return function<T>(target:T , propertyname: keyof T){
        let value:string |number;
        function getter(){
            console.log("getter");
            return value
        }
        function setter(NewValue:string | number){
            if(typeof NewValue == "number"){
                if(options.min && options.min > NewValue){
                    throw new Error (options.Errormessage?? "The min value cant be grater than the value")
                }
                if(options.max && options.max < NewValue){
                    throw new Error (options.Errormessage?? "The max value cant be less than the value")
                }
            }
            if(typeof NewValue == "undefined"){
                if(options.default){
                    value = options.default
                }
            }else{
                value = NewValue
            }
        }
        Object.defineProperty(target,propertyname,{
            get:getter,
            set:setter
        })
}
}
class Userobject{
@Property()
public fullname :string =''
@Property({min:50,max:70,default:40})
public age:number | undefined = undefined
}
try {
const userobj = new Userobject()
userobj.fullname = "zara st"
console.log(userobj.fullname)  // getter , zara st
console.log(userobj.age); //40
console.log(userobj);    // Userobject{}
} catch (error:any) {
console.log(error?.message);
}

/////////////////////////////////////////////////////////////////

function validateStringLength(minLength: number, maxLength: number) {
    return function (target: any, key: string) {
      let value: any;
  
      const getterr = function () {
        return value;
      };
  
      const setterr = function (newValue: any) {
        if (typeof newValue !== 'string') {
          throw new Error(`Invalid value for ${key}. Must be a string.`);
        }
  
        if (newValue.length < minLength || newValue.length > maxLength) {
          throw new Error(
            `${key} must have a length between ${minLength} and ${maxLength}.`
          );
        }else{
             value = newValue;
        }
  
       
      };
  
      Object.defineProperty(target, key, {
        get: getterr,
        set: setterr,
        enumerable: true,
        configurable: true,
      });
    };
  }
  
  class Person {
    @validateStringLength(7,7)
    name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
  
  try {
    const person = new Person("John Doe");
  console.log(person.name); // Outputs "John Doe"

  } catch (error:any) {
    console.log(error?.message);
  }
  
  