


import {Order,Array} from "effect"
import { cons } from "effect/List"

console.log(Order.string("banana","apple"))

console.log(Order.string("grapess","peach"))

console.log(Order.number(23,12))

console.log(Order.bigint(2n,2n))


const betweenNumbers = Order.between(Order.number)({
    maximum: 30,
    minimum: 20
})

const ren = ['b','a','e','f','c']

const result =  Array.sort(ren,Order.string)


// console.log(ren)
// console.log(result)
// console.log(betweenNumbers(25))


interface Face{
    id:number
    name:string
    address:string
    age:number
    gender:string
}

interface Age{
    name:string
    age:number
}

const a = {id:1001,name:"Jack Daniels",address:"Annanagar",age:32,gender:"male"}
const b = {id:1002,name:"Jack Brown",address:"Anna Salai",age:45,gender:"male"}


const byage = Order.mapInput(Order.number,(age:Age) => age.age)
const byname = Order.mapInput(Order.string,(age:Age)=> age.name)
const byid =  Order.mapInput(Order.number,(face:Face)=> face.id)
const byaddress = Order.mapInput(Order.string,(face:Face)=>face.address)
const bygender = Order.mapInput(Order.string,(face:Face)=> face.gender)

const bynameage = Order.combine(byname,byage)


const person = Array.sort([{name:"Wes Gibbins",age:23},{name:"Connor Walsh",age:23}],bynameage)

const render = Array.sort([a,b],byid)

console.log(person)
console.log(render)


