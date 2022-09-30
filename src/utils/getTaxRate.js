// This function assigns the tax rate to a product based on its category.

export function getTaxRate(product) {
    let rate
    product.isImported ? rate = 5 : rate = 0
    switch (product.category) {
        case 'books':
        case 'food':
        case 'medical':
            rate += 0
            break;
        default:
            rate += 10
            break;
    }
    return rate
}