import { Effect, Console, Context } from "effect"

class SomeContext extends Context.Tag("SomeContext")<SomeContext, { message: string }>() {}

const program = Effect.gen(function* () {
  const ctx = yield* SomeContext
  yield* Console.log(`Message from context: ${ctx.message}`)
  return 42
})

// Provide the context and run it
const runnable = Effect.provideService(program, SomeContext, { message: "Hello Effect!" })

Effect.runPromise(runnable).then(result => {
  console.log("✅ Result:", result)
})
