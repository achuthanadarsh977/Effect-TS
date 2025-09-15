

import { Console } from 'console'
import {Effect,Schema,Micro} from 'effect'

const program = Effect.succeed(42)

const fiber = Effect.runFork(program)

const Vowels = Schema.Struct({
    name:Schema.String,
    age:Schema.Number

})

console.log(program)
console.log(fiber)
