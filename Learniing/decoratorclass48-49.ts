import { log } from 'console';
//Decorator class

type classDecorator={
    message:string
}

function Decorator(props:classDecorator) : any{
    return function(target:Function & typeof Decclass){
        if(!target.message){
            target.message = props.message
        }
    }
}

@Decorator({message:"hello world"})

class Decclass{
    public  static message:string = "typescript"
}
console.log(Decclass.message);

//////////////////////////////////////////////////////////////////

