

import {Schema,Pretty} from "effect"


const Person = Schema.Struct({
    name:Schema.String,
    age:Schema.Number,
    gender:Schema.String,
    address:Schema.String,
    email:Schema.String
})

const Indy = Pretty.make(Person)

console.log(Indy({name:'John' , age:32,gender:'Male',address:'Chennai',email:'john@gmail.com'}))

