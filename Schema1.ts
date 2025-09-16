


import { Schema } from "effect";






const person = Schema.Struct({
    name:Schema.String,
    age:Schema.Number,
    email:Schema.String,
    phone:Schema.Number,
    address:Schema.String,
    gender:Schema.String,
    aadhar_no:Schema.Number  
})


type person = Schema.Schema.Type<typeof person>


type PersonEncoded = Schema.Schema.Encoded<typeof person>

const rawperson: PersonEncoded = {

    name:"John Andrews",
    age:32,
    email:'john@example.com',
    phone:7660366422,
    address:'amjikarai',
    gender:'Male',
    aadhar_no:3444456778
}

const parsed = Schema.decodeSync(person)(rawperson)
console.log(parsed)

