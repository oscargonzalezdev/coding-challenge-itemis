import { Box, Heading, Text, Button, Alert } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td } from '@chakra-ui/react'
import { getTaxRate } from "../utils/getTaxRate"
import { getPriceWithTax } from "../utils/getPriceWithTax"
import { getSalesTaxes } from "../utils/getSalesTaxes"
import { getTotal } from "../utils/getTotal"

function ReceiptDetails(props) {
    const { data, onHandleRemoveProducts } = props
    const purchasedProducts = [...data]
    return (
        <section>
            <Heading textAlign='center' as='h2' p='4' size='md'>Receipt Details</Heading>
            <Box h='600px' bg='gray.50' borderRadius='20' overflow='scroll' overflowX='hidden'>
                {!purchasedProducts.length > 0 ? (
                    <Alert status='warning' flexDirection='column' p='10'>
                        <Text fontSize='3rem'>🛒</Text>
                        <p>Seems your shopping cart is empty. </p>
                        <p><strong>Buy some products to see your receipt.</strong></p>
                    </Alert>
                ) : (
                    <Table variant='striped' colorScheme='teal' >
                        <Thead>
                            <Tr>
                                <Th w='250px'>Product</Th>
                                <Th>QTY</Th>
                                <Th>{'Unit Price (€)'}</Th>
                                <Th>{'Tax Rate (%)'}</Th>
                                <Th>{'Total (€)'}</Th>
                            </Tr>
                        </Thead>
                        <Tbody>{
                            purchasedProducts.map((product, index) => {
                                const { priceWithTax } = getPriceWithTax(product)
                                return (
                                    <Tr key={index}>
                                        <Td display='flex'>
                                            <Button variant='ghost' size='sx' marginRight='4' onClick={() => onHandleRemoveProducts(product)}>❌</Button>
                                            {product.isImported ? `imported ${product.name}` : product.name}
                                        </Td>
                                        <Td >{1}</Td>
                                        <Td >{product.price}</Td>
                                        <Td >{getTaxRate(product)}</Td>
                                        <Td fontWeight='bold'>{priceWithTax}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                        <Tfoot>
                            <Tr>
                                <Th border='none'></Th>
                                <Th border='none'></Th>
                                <Th border='none'></Th>
                                <Th>Sales Taxes:</Th>
                                <Td fontWeight='bold'>{getSalesTaxes(purchasedProducts)}</Td>
                            </Tr>
                            <Tr>
                                <Th></Th>
                                <Th></Th>
                                <Th></Th>
                                <Th>Total:</Th>
                                <Td border='none' fontWeight='bold'>{getTotal(purchasedProducts)}</Td>
                            </Tr>
                        </Tfoot>
                    </Table>
                )}
            </Box>
        </section>
    )
}

export default ReceiptDetails