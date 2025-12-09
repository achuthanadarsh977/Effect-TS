
import {pipe} from "effect"

const increment = (x:number) => x+1

const decrement = (x:number) => x-2

const multiply = (x:number) => x*3

const power = (x:number) => x**4

const ten = pipe(24,increment,decrement,multiply,power)

console.log("Operations:"+ten)