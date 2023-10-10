type Userdetail ={
    id:number
    name:string
    email:string

}

type Createoptions<Type> = {
    [Property in keyof Type ] ?:Type[Property]
}
type Createrequire<Type> = {
    [Property in keyof Type ] :Type[Property]
}  
type Createreadonly<Type> = {
    readonly[Property in keyof Type ] :Type[Property]
}
type Maketype<Type> = {
    -readonly[Property in keyof Type ] -?:Type[Property]
}
type Getter<Type> ={
    [Property in keyof Type as `get${Capitalize <string & Property>}` ]:()=>Type[Property]
}
type gettes = Getter<Userdetail>
 type Edituser = Createoptions<Userdetail>
 type Requireuser = Createrequire<Edituser>
 type Readonlyuser = Createreadonly<Edituser>
 type Usertypes = Maketype<Readonlyuser>
