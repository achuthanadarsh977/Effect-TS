

import {FileSystem} from "@effect/platform"
import {Effect} from "effect"

const program = Effect.gen(function* (){
    const fs = yield* FileSystem.FileSystem
})