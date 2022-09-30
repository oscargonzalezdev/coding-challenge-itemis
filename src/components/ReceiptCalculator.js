import { useState } from 'react'
import ReceiptDetails from './ReceiptDetails'
import ProductsList from './ProductsList'
import { Box, Heading } from '@chakra-ui/react'

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
            <Box textAlign='center' p={8}>
                <Heading as='h1' size='lg'>Sales Taxes</Heading>
                <Heading fontWeight='semibold' as='h2' size='sm'>Coding Challenge</Heading>
            </Box>
            
            <div className='flex-row'>
                <ProductsList onHandleBuyProduct={handleBuyProduct} />
                <ReceiptDetails data={purchasedProducts} onHandleRemoveProducts={removeProducts} />
            </div>
        </section>

    )
}

export default ReceiptCalculator