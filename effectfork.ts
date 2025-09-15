

import { Console } from 'console'
import {Effect} from 'effect'

const program = Effect.succeed(42)

const fiber = Effect.runFork(program)

fiber.await().then(
    result => {console.log(result)}
)