




import {BigDecimal} from "effect"

const decimal = BigDecimal.make(1n,2)

console.log(decimal)

console.log(String(decimal))

console.log(BigDecimal.format(decimal))

console.log(BigDecimal.toExponential(decimal))

