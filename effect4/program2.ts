

import {Effect , Console} from "effect"

const program = Effect.succeed('Hello Everyone!')

Effect.runSync(program)