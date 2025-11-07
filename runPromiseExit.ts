
import {Effect} from "effect"


Effect.runPromiseExit(Effect.succeed(42)).then(console.log)

Effect.runPromiseExit(Effect.fail(32)).then(console.log)