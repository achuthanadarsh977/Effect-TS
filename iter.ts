import { Stream, Sink, Effect } from "effect"


// const stream = Stream.make('1','2','3','4','5')
// const stream2 = Stream.make('a','b','c','d')

// const numericsum = Sink.sum

// const stringSum = numericsum.pipe(Sink.mapInput((s:string) => Number.parseFloat(s)))


// Effect.runPromise(Stream.run(stream,stringSum)).then(console.log)
// Effect.runPromise(Stream.run(stream2,stringSum)).then(console.log)


const stream = Stream.make('1','2','3','4','5')
const stream2 = Stream.make('12','12','20','21','34')


const numericsum = Sink.sum

const stringsum = numericsum.pipe(Sink.mapInput((s:string) => Number.parseFloat(s)))

Effect.runPromise(Stream.run(stream,stringsum)).then(console.log)
Effect.runPromise(Stream.run(stream2,stringsum)).then(console.log)