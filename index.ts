import {Effect , Console} from "effect"

const program = Console.log('Hello From Effect TS')
Effect.runPromise(program)