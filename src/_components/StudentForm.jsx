import React from 'react';

import { Row, Col, Form, Button } from 'react-bootstrap';

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="student_name">
                    <Form.Label column sm={2}>Név</Form.Label>
                    <Col sm={10}>
                        <Form.Control type="text" placeholder="Név" />
                    </Col>
                </Form.Group>
                {/* <Form.Group as={Row}>
                    <Col sm={{ span: 1, offset: 5 }}>
                        <Button type="submit">Mentés</Button>
                    </Col>
                </Form.Group> */}
            </Form>
            // <form onSubmit={this.handleSubmit}>
            //     <label htmlFor="name">Név</label>
            //     <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
            //     <input type="submit" value="Submit" />
            // </form>
        );
    }
}

export { StudentForm }