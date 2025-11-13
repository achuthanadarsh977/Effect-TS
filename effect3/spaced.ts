

import {Array,Chunk,Duration,Effect,Schedule} from "effect"



const schedule = Schedule.spaced("200 millis")

console.log(schedule,"100 millis")