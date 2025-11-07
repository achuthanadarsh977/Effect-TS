
import {Effect} from "effect"
import { cons } from "effect/List"

const succeed = Effect.succeed(42)
const fail = Effect.fail(23)


Effect.runPromise(succeed).then(succeed => {
  console.log("✅ Result:", succeed)
})

Effect.runSync(fail)
