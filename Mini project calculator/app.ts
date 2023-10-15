interface Calculator{
    Add(Number1:number , Number2:number):number |undefined
    Subtract(Number1:number,Number2:number):number |undefined
    Multiply(Number1:number,Number2:number):number|undefined
    Divide(Number1:number,Number2:number):number|undefined
}
class SimpleCalculator implements Calculator{
    Add(Number1: number, Number2: number): number |undefined {
        if(isNaN(Number1) || isNaN(Number2)){
            console.log("Invalid number pls input number");
        }
        else{
             return Number1 + Number2
        }
       
    }
    Subtract(Number1: number, Number2: number): number|undefined {
        if(isNaN(Number1) || isNaN(Number2)){
            console.log("Invalid number pls input number");
        }
        else{
        return Number1 - Number2
    }
}
    Multiply(Number1: number, Number2: number): number|undefined {
        if(isNaN(Number1) || isNaN(Number2)){
            console.log("Invalid number pls input number");
        }
        else{
        return Number1 * Number2
    }
}
    Divide(Number1: number, Number2: number): number|undefined|any{
        if(Number1 && Number2 == 0) {
            console.log("Error:Divide by  zero");
            return NaN
        }
        return (Number1 / Number2)
    }

}
const cal = new SimpleCalculator();
console.log(cal.Add(3,6));
console.log(cal.Subtract(5,4));
console.log(cal.Multiply(7,3));
console.log(cal.Divide(8,3));
