


import {pipe,Stream,Sink,Effect} from "effect"


// const result = pipe(
//     [1,2,3],
//     arr=>arr.map(n=>n*2),
//     arr=>arr.filter(n=>n>2)
// )

// console.log(result)



const stream = Stream.make(1,2,3,4,5)

const sink = Sink.take<number>(3)

const sum = Stream.run(stream,sink)

const r = [1,2,3]
const firm  = Stream.fromIterable(r)

const sut = Sink.count
const suv = Stream.run(firm,sut)


const hive = Sink.head<number>()
const kite = Stream.run(firm,hive)

Effect.runPromise(sum).then(console.log)

Effect.runPromise(suv).then(console.log)
Effect.runPromise(kite).then(console.log)

