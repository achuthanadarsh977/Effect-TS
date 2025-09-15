


import {Effect} from "effect"

const program = Effect.log('Application has started')

Effect.runFork(program)