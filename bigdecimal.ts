





//from bigint
import {BigDecimal} from "effect"

const decimal = BigDecimal.fromBigInt(10n)

//from string
const string = BigDecimal.fromString("a")



console.log("Decimal from integer:"+decimal)
console.log("Decimal from string:"+string)



const dec1 = BigDecimal.unsafeFromString("1.05")
const dec2 = BigDecimal.unsafeFromString("3.24")
console.log(BigDecimal.lessThan(dec1,dec2))
console.log(BigDecimal.greaterThan(dec2,dec1))
console.log(BigDecimal.sum(dec1,dec2))
console.log(BigDecimal.multiply(dec1,dec2))
console.log(BigDecimal.divide(dec1,dec2))
console.log(BigDecimal.equals(dec1,dec2))
console.log(BigDecimal.subtract(dec1,dec2))

const dec3 = 3.34
const dec4 = 4.43
console.log(String(dec3+dec4))
console.log(String(dec3-dec4))
console.log(BigDecimal.isPositive(dec1))
console.log(BigDecimal.isNegative(dec1))


const dec5 = BigDecimal.make(1050n,2)
const dec6 = BigDecimal.make(105n,3)

console.log(BigDecimal.equals(dec5,dec6))