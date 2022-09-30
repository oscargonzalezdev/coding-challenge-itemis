import { useState } from 'react'
import ReceiptDetails from './ReceiptDetails'
import ProductsList from './ProductsList'
import { Heading } from '@chakra-ui/react'

function ReceiptCalculator() {
    // this state store the purchased products
    const [purchasedProducts, setPurchasedProducts] = useState([])

    const handleBuyProduct = (product) => {
        setPurchasedProducts([...purchasedProducts, product])
    }

    const removeProducts = (product) => {
        const newPurchasedProducts = purchasedProducts.filter(currentProduct => {
            return currentProduct.name !== product.name
        })
        setPurchasedProducts(newPurchasedProducts)
    }

    return (
        <section>
            <Heading textAlign='center' as='h1' p='8' size='lg'>Receipt Calculator</Heading>
            <div className='flex-row'>
                <ProductsList onHandleBuyProduct={handleBuyProduct} />
                <ReceiptDetails data={purchasedProducts} onHandleRemoveProducts={removeProducts} />
            </div>
        </section>
    )
}

export default ReceiptCalculator