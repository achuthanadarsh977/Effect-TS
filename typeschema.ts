


import {typeSchema} from "effect/Schema"


type Person = {
    name:string,
    age:number
}


const personSchema = typeSchema<Person>()

console.log(typeSchema.decodeSync(personSchema)({name:'Sam Johnson',age:30}))

