

import {Effect,Schema} from "effect"
import { string } from "effect/Equivalence"



// const u = Schema.NumberFromString.pipe(Schema.between(1,10))

// console.log(u.make(8))

// console.log(u)


// const v = Schema.Struct({
//     name:Schema.NonEmptyString
// })

// console.log(v.make({name:"a"}))
// console.log(v.make({name:"b"}))
// console.log(v)

const Record =  Schema.Record({
    key:Schema.String,
    value:Schema.NonEmptyString
})

console.log(Record.make({a:'a',b:'b'}))