

import {Schema,Pretty,Effect} from "effect"


// const student = Schema.Struct({
//     name: Schema.NonEmptyString,
//     age: Schema.Number
// })


// const student2 = Schema.Struct({
//     name:Schema.NonEmptyString,
//     age: Schema.Number.pipe(
//         Schema.propertySignature,
//         Schema.withConstructorDefault(() => 0)
//     ),

//     id:Schema.Number.pipe(
//         Schema.propertySignature,
//         Schema.withConstructorDefault(() => 0)
//     ),
//     address:Schema.NonEmptyString,
//     timestamp:Schema.Number.pipe(
//         Schema.propertySignature,
//         Schema.withConstructorDefault(() => new Date().getTime())
//     )
// })

// console.log(student.make({name:"John Martin",age:32}))
// console.log(student2.make({name:"Frank Martin",age:45,id:1001,address:'Sivanada Salai'}))

// const Person = Schema.Struct({
//     name:Schema.String,
//     age:Schema.Number,
//     id:Schema.Number
// })

// Schema.decodeUnknownSync(Person)({name:'Sam'} , {errors:"all"})


// const ageSchema = Schema.Number.annotations({
//     title:'Age',
//     description:'The age of a person in years',
//     pretty: () => (value) => `I am ${value} years old`

// })

// const prettyschema = Pretty.make(ageSchema)
// console.log(prettyschema(33))


// const stringschema = Schema.String.annotations({
//     title:'name',
//     description:'The identity of a person',
//     pretty: () => (n) => `My name is ${n}` 
// })

// const nameschema = Pretty.make(stringschema)
// console.log(nameschema('Sam'))

