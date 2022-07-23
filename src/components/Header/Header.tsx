import React from 'react'
import './Header.css'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Header: React.FC<any> = ({ imageURL }: any) => {

    return (
        <Container fluid className="Header p-3">

            <Row>
                <Col>
                    <Image src={imageURL} />
                </Col>
            </Row>
        </Container>
    )
}

export default Header