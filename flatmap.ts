
import {Effect,pipe} from "effect"


const base = Effect.succeed(42)
const program = pipe(base , Effect.flatMap(n => Effect.succeed(n*2)))

Effect.runSync(program)