
import { Stream, Sink, Effect } from "effect"

const r = [1, 2, 3, 4]

const ream = Stream.fromIterable(r).pipe(Stream.concurrent(2))

const rink = Sink.forEach((n:number) => Effect.sync(() => {
    console.log("Processing", n)
  }))

// Run the stream with the sink
Effect.runPromise(Stream.run(ream, rink)).then(console.log)
