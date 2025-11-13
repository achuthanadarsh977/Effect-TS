
import {Array,Chunk,Duration,Effect,Schedule} from "effect"



const schedule = Schedule.fixed("200 millis")

console.log(schedule,"100 millis")