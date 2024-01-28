import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function CategoryForm() {
    const [categoryName, setCategoryName] = useState('');
    const [categoryInfo, setCategoryInfo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the form submission logic here
        console.log({ categoryName, categoryInfo });
    };

    return (
        <Container>
            <h1>Create a new category</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group as={Row} className="mb-3" controlId="formCategoryName">
                    <Form.Label column sm={2}>
                        Enter category Name
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            type="text"
                            placeholder="Enter category name"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formCategoryInfo">
                    <Form.Label column sm={2}>
                        Category information
                    </Form.Label>
                    <Col sm={10}>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="Enter info"
                            value={categoryInfo}
                            onChange={(e) => setCategoryInfo(e.target.value)}
                        />
                    </Col>
                </Form.Group>
                <div className="text-center">
                    <Button variant="secondary" type="button">
                        Cancel
                    </Button>{' '}
                    <Button variant="primary" type="submit">
                        Next
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

export default CategoryForm;
