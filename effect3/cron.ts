

import {Cron,DateTime} from "effect"



const coon = Cron.make({
    seconds:[0],
    minutes:[0],
    hours:[4],
    days:[1,2,3,4,5,6,7,8,9,10,11,12],
    months:[],
    weekdays:[]
})

console.log(coon)