


import {Stream,Chunk,Effect} from "effect"
import { cons } from "effect/List"


const emptystream = Stream.empty

const onevalue = Stream.succeed(3)

const twovalues = Stream.range(1,10)

const infinitestream = Stream.iterate(1, n => n*2)

const effectlist = Effect.succeed(Chunk.make(1,2,3))

console.log(emptystream)
console.log(onevalue)
console.log(twovalues)
console.log(infinitestream)
console.log(effectlist)