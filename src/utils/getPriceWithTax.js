import { getTaxRate } from "./getTaxRate";
import { roundNumber } from "./roundNumber"

export function getPriceWithTax(product) {
    let taxRate = getTaxRate(product)
    if (taxRate !== 0) {
        let saleTax = roundNumber((product.price * taxRate) / 100).toFixed(2)
        let priceWithTax = (roundNumber(saleTax) + product.price).toFixed(2)
        return { priceWithTax: priceWithTax, saleTax: saleTax }
    } else {
        return { priceWithTax: product.price, saleTax: 0 }
    }
}