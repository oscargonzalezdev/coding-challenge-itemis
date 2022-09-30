import { Box, Heading } from '@chakra-ui/react'
import { productsArr } from '../seeds/products'
import ReceiptDetails from './ReceiptDetails'

function ChallengeSolutions() {

    const input1 = productsArr.filter(product => {
        return (
            product.name === 'book' ||
            product.name === 'music CD' ||
            product.name === 'chocolate bar'
        )
    })

    const input2 = productsArr.filter(product => {
        return (
            product.name === 'chocolate box mark 1' ||
            product.name === 'perfume bottle mark 1'
        )
    })

    const input3 = productsArr.filter(product => {
        return (
            product.name === 'perfume bottle mark 2' ||
            product.name === 'perfume bottle mark 3' ||
            product.name === 'packet of headache pills' ||
            product.name === 'chocolate box mark 2'
        )
    })

    const inputs = [[...input1], [...input2], [...input3]]

    return (
        <section id='solutions'>
            <Heading textAlign='center' as='h1' size='lg' p='8'>Solutions</Heading>
            <div>
                {inputs.map((input, index) => {
                    return (
                        <Box mb='10' className='flex-row' key={index}>
                            <div>
                                <Heading textAlign='center' as='h2' p='4' size='md'>Input {index + 1}</Heading>
                                <Box borderRadius='10' p='4' bg='gray.50' gap='4' shadow='base'>
                                    {
                                        input.map((product, index) => {
                                            return (
                                                <li key={index}>{product.isImported && 'inported'} {product.name} at {product.price}</li>
                                            )
                                        })
                                    }
                                </Box>
                            </div>
                            <div>
                                <ReceiptDetails data={input} title={`Output ${index + 1}`} />
                            </div>
                        </Box>
                    )
                })}
            </div>
        </section>
    )
}

export default ChallengeSolutions