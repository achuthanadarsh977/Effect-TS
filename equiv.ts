



import {Equivalence} from "effect"
import { Interface } from "readline"


interface User{
    id:number
    name:string
}

const equivalent = Equivalence.mapInput(Equivalence.number ,(user : User) => user.id)

const equiw = Equivalence.mapInput(Equivalence.string , (user:User) => user.name)

const a = {id: 1001 , name:"John Samuel"}
const b = {id:1002 , name: "John Samuel"}

console.log(equivalent(a,b))
console.log(equiw(a,b))