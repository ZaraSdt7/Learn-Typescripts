
type stringornever<t> = t extends string ? string :never;
let str:stringornever<number[]>;

type notnull<z> = z extends null |undefined ? never :z
type book={
title:string
id:number
}

type nullbook = notnull<book>
 //////////////////////////////////////

type Isstring<z> = z extends string ? true :false;
let isstring : Isstring<"zara"> = true; // type is true
let isnotstring : Isstring<number[]> = false; // type is false
 type Makenullable<A> = A extends null |undefined ? A :A |null |undefined;
 let nullstring :Makenullable<string> = null // type is string | null | undefined
 let notstring:Makenullable<string> = "zara" // type is string
 