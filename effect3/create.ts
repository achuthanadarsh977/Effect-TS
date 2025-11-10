import {Effect , Console} from "effect"

const success = Effect.succeed(42)

const failure  = Effect.fail(34)


Effect.runSync(success)

