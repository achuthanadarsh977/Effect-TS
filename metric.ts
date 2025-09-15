

import {Metric,Effect} from "effect"


const requestcount = Metric.counter("request_count")

const program = Effect.gen(function*(){
    const a = yield* requestcount(Effect.succeed(1))
    const b = yield* requestcount(Effect.succeed(2))
    const c = yield* requestcount(Effect.succeed(-4))

    const state = yield* Metric.value(requestcount)
    console.log(state)


    return a*b*c

})


Effect.runPromise(program).then(console.log)