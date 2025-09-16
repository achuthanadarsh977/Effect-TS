

import { Schema } from "effect";

const individual = Schema.Struct ({
    name:Schema.String,
    age:Schema.Number,
    id:Schema.Number,
    address:Schema.String,
    email:Schema.String
})

const PersonEquivalence = Schema.equivalence(individual)

const john = {name:'John Matthews',age:32,id:1001,address:'Chennai',email:'john@gmail.com'}

const alice = {name:'Alice Underwood',age:45,id:1002,address:'Karnataka',email:'alice@gmail.com'}

console.log(PersonEquivalence(john,alice))

console.log(PersonEquivalence(john,{name:'John Matthews',age:32,id:1001,address:'Chennai',email:'john@gmail.com'})
)



const input = Schema.Struct({})

const input1 = {}
const input2 = {}
console.log(Schema.equivalence(input)(input1,input2))


const output = Schema.String.annotations({equivalence: () => (a:string,b:string) => a[0] === b[0]})

const tremor = Schema.String.annotations({equivalence: () => (c:string,d:string)=> c[2] === d[2]})

const eq = Schema.equivalence(output)

console.log(eq('aab','aaa'))

console.log(eq('cca','dca'))
