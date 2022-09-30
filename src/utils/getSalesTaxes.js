// this function sums all sale taxes paid

import { getPriceWithTax } from "./getPriceWithTax";
import { roundNumber } from "./roundNumber";

export function getSalesTaxes(data) {
    let salesTaxes = 0
    data.map(product => {
        const { saleTax } = getPriceWithTax(product)
        return salesTaxes += Number(saleTax)
    })
    return roundNumber(salesTaxes).toFixed(2)
}