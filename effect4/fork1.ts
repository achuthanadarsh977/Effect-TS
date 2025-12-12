

import {Effect,Fiber} from "effect"


const background = Effect.gen(function* (){
    yield* Effect.sleep("5 seconds")
    yield* Effect.log("Background Complete")
    return "done"
})


const fiber = Effect.runFork(background)
console.log(Effect.runSync(fiber))