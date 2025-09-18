

import {Path} from "@effect/platform"

import {Effect} from "effect"
import { NodeContext, NodeRuntime } from "@effect/platform-node"


// const program = Effect.gen(function* (){

//     const path = yield* Path.Path


//     const mypath = path.join("tmp","file.txt")
//     console.log(mypath)
// })

// NodeRuntime.runMain(program.pipe(Effect.provide(NodeContext.layer)))

const program1 = Effect.gen(function* (){
    const path = yield* Path.Path
    const mypath = path.join("tmp","file1.txt")
    console.log(mypath)
})

