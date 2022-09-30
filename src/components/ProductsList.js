import { productsArr } from '../seeds/products'
import { Box, Heading, Text, Image, Button } from '@chakra-ui/react'

function ProductsList(props) {
    const { onHandleBuyProduct } = props
    return (
        <section>
            <Heading as='h2' p='4' size='md'>Products</Heading>
            <Box h='600px' overflow='scroll' overflowX='hidden'>
                {productsArr.map((product, index) => {
                    return (
                        <Box key={index} borderRadius='10' p='4' m='4' bg='gray.100' gap='4' display='flex' shadow='base'>
                            <Image boxSize='100px' src={`/images/${product.imageName}`} alt={product.name} />
                            <Box display='flex' flexDirection='column' gap='1'>
                                <Text fontWeight='bold' textTransform='capitalize' fontSize='1.2rem'>{product.isImported ? `imported ${product.name}` : product.name}</Text>
                                <p>{product.price} €</p>
                                <Button w='fit-content' colorScheme='teal' onClick={() => onHandleBuyProduct(product)}>Buy
                                </Button>
                            </Box>
                        </Box>
                    )
                })}
            </Box>
        </section>
    )
}

export default ProductsList