import React from 'react'
import dynamic from 'next/dynamic'
import {Col, Container, Row} from 'react-bootstrap'

export default function Home() {

    let salata:string;


    const MyCalendar = dynamic(() => import('../components/MyCalendar'), {
        ssr: false
    });

    const mutateEvents = () => {}

    return (
        <Container>
            <Row>
                <Col>
                    <MyCalendar
                        rooms={[]}
                        events={[]}
                        mutateEvents={mutateEvents}
                    />
                </Col>
            </Row>
        </Container>
    )
}
