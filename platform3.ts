import { FileSystem } from "@effect/platform"
import { NodeContext, NodeRuntime } from "@effect/platform-node"
import { Effect } from "effect"

//      ┌─── Effect<void, PlatformError, FileSystem>
//      ▼
const program = Effect.gen(function* () {
  const fs = yield* FileSystem.FileSystem

  // Reading the content of the same file where this code is written
  const content = yield* fs.readFileString("./index.ts", "utf8")
  console.log(content)
})

// Provide the necessary context and run the program
NodeRuntime.runMain(program.pipe(Effect.provide(NodeContext.layer)))