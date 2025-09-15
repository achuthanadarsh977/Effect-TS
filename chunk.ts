



import {Chunk,List,Equal} from "effect"

const chunk = Chunk.empty<number>()

const chunk1 = Chunk.make(1,2,3)

const chunk2 = Chunk.fromIterable([1,2,3])
const chunk3 = Chunk.fromIterable(List.make(1,2,3))
const chunk4 = Chunk.make('a','b','c')




console.log(chunk)
console.log(chunk1)
console.log(chunk2)
console.log(chunk3)
console.log(Chunk.appendAll(chunk1,chunk4))

console.log(Chunk.appendAll(Chunk.make('c','d','e'),chunk4))

console.log(Equal.equals(chunk1,chunk2))


const array = Chunk.toReadonlyArray(chunk1)
console.log(array)
