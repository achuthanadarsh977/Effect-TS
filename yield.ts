

import {Effect,Queue} from "effect"

const red = Effect.gen(function* (_){
    yield* _(Effect.log("Hello everyone"))
    yield* _(Effect.sleep(1000))
    yield* _(Effect.log("Program anyone"))
})


Effect.runPromise(red).then(() => console.log('Program finished')).catch((err) => console.log("Error handled"))


