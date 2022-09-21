import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import Login from "../../components/forms/login/Login";

export default function Home() {

    return (
        <Container>
            <Row>
                <Col xs={3}>
                    <Login/>
                </Col>
            </Row>
        </Container>
    )
}
