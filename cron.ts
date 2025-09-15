

import {Cron,DateTime,Either} from "effect"



const cron = Cron.make({
    seconds:[0],
    minutes:[0],
    hours:[4],
    days:[7,8,9,10],
    months:[],
    weekdays:[],
    tz: DateTime.zoneUnsafeMakeNamed("Asia/Kolkata") 
})



const expression = "0 0 3 7-10 * *"

const eitherparse = Cron.parse(expression)


if(Either.isRight(eitherparse)){

    console.log("Cron right:"+eitherparse.right)

}

else{
    console.log("Cron left:"+eitherparse.left)
}


const crock = new Date("2025-02-08 03:00:00")

console.log(Cron.match(expression,crock))