

import {Schema} from "effect"
import {typeSchema} from "effect/Schema"


// type Person = {
//     name:string,
//     age:number
// }


// const personSchema = typeSchema<Person>()

// console.log(typeSchema.decodeSync(personSchema)({name:'Sam Johnson',age:30}))

const Original = Schema.Struct({
    quantity: Schema.String.pipe(Schema.minLength(3))
})

