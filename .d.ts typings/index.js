const  { hash, addCurrency, returnNotTyped } = require('./utils') 

const main = async () => {
    const hashVal = await hash('hash')
    console.log(hashVal)
    const amountWithCurrency = addCurrency(7.2)
    console.log(amountWithCurrency)
    const returnNotTypedValue = returnNotTyped('stringValue')
    console.log(returnNotTypedValue)
}

main()
