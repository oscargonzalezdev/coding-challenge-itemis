// this function returns the sum of all prices including taxes.

import { getPriceWithTax } from "./getPriceWithTax";

export function getTotal(data) {
    let total = 0
    data.forEach(product => {
        const { priceWithTax } = getPriceWithTax(product)
         total += Number(priceWithTax)
    })
    return total.toFixed(2)
}