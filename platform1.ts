

import {Command} from "@effect/platform"


const command = Command.make("ls", "-al")
console.log(command)