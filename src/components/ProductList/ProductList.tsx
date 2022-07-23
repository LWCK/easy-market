import React from 'react'
import './ProductList.css'
import { Col, Container, Image, Row } from 'react-bootstrap'

const ProductList: React.FC<any> = ({ products }: any) => {

    console.log(products)


    const productMap = products?.map((i: any) => (
        <>
            <ul>
                <li>{i.title} - {i.price}F</li> <Image className='image-product' src={i.image} />
            </ul>
        </>
    ))

    const productsQte = products.length


    return (
        <Container fluid className="products-container mt-5">
            <Row>
                <Col xs={2} md={3} xl={3} class="sidebar">
                    Nombre de produits : {productsQte}
                </Col>
                <Col xs={10} md={9} xl={9}>
                    {productMap}
                </Col>
            </Row>
        </Container>
    )
}

export default ProductList