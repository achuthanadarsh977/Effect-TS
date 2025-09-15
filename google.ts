

import {Effect,Context} from  "effect"


class SomeContext extends Context.Tag("SomeContext")<SomeContext, {}>() {}

declare const program: Effect.Effect<number,Error,SomeContext>

type A = Effect.Effect.Success<typeof program>


type B = Effect.Effect.Error<typeof program>

type C = Effect.Effect.Context<typeof program>
