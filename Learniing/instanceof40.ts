class Song{
    constructor(public title:string , public duration:number){}
}

class Playlist{
    constructor(public name:string , public songs:Song[]){}
}

function Issong(item:any):boolean{
    return item instanceof Song
}

function Getitename(item:Song |Playlist):string{
    if(item instanceof Song){
        return item.title
    }else if(item instanceof Playlist){
        return item.name
    }else{
        return "error"
    }
    
}

const songy = new Song("hipop",7)
const play = new Playlist("new song",[songy])
console.log(Getitename(songy));
console.log(Getitename(play));
console.log(songy);
