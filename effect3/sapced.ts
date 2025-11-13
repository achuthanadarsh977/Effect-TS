

import {Array,Chunk,Duration,Effect,Schedule} from "effect"



const schedule = Schedule.spaced("200 mills")

console.log(schedule,"100 mills")