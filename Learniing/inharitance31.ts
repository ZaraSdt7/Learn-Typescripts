class Animal{
    public name:string
    constructor(name:string){
        this.name = name
    }
    SoundAnimal(typesound:string){
        return `${this.name} sound is : ${typesound}`
    }

}
class Dog extends Animal{
    constructor(thename:string){
        super(thename)
        this.name = thename
    }
    Animalname():string{
        return this.name
    }
}
class Caw extends Animal{
    constructor(names:string){
        super(names)
    }
}
const dog = new Dog("Dog");
console.log(dog.SoundAnimal("fkgjd;lfkjg"));
console.log(dog.Animalname());
const caww = new Caw("Caw");
console.log(caww.SoundAnimal("moooooooo😂"));