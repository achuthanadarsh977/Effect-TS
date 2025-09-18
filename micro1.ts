

import {Micro} from "effect"


const program = Micro.succeed('Hello everyone')


Micro.runPromise(program).then(console.log)
