import React from 'react';
import { Col, Row, Container } from '../../components/Grid';
import Jumbotron from "../../components/jumbotron";

class NotFound extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>404 Page Not Found!</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}