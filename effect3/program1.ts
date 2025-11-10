
import {Effect} from "effect"

const product = (a:number,b:number): Effect.Effect<number, Error> => 
    b === 0 ? Effect.fail(new Error('cannot multiply by zero')) : Effect.succeed(a*b)


console.log(product(5,5))