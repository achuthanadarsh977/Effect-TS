import {Effect,Console,Fiber} from "effect"



const backgroundTask = Effect.gen(function* (){
    yield* Effect.sleep("5 seconds")
    yield* Effect.log("Console log completed")
    return "result"
}) 


console.log(Effect.fork(backgroundTask))



