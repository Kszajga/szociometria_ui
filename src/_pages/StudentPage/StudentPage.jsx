import React from 'react';
import { connect } from 'react-redux';
import { studentActions } from '../../_actions/student.actions';

import { ButtonToolbar, Button, Table, Modal, Header, Body } from 'react-bootstrap';
import { Trash, Pencil } from 'react-bootstrap-icons';
import { StudentForm } from '../../_components/StudentForm';

class StudentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }
    showModal = () => {
        this.setState({ show: true });
        console.log(this.state);
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    componentDidMount() {
        this.props.dispatch(studentActions.getAllByUser());
    }

    render() {
        const { students, authentication } = this.props;

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan="2">Név</th>
                            <th>
                                <Button variant="primary" size="sm" onClick={this.showModal}>
                                    Hozzáad
                                </Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.students &&
                            students.students.map(
                                (student, index) =>
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.class_id}</td>
                                        <td>
                                            <ButtonToolbar>
                                                <Button variant="warning" size="sm"><Pencil size={18} /></Button>
                                                <Button variant="danger" size="sm"><Trash size={18} /></Button>
                                                <AddNewStudentModal
                                                    show={this.state.show}
                                                    onHide={this.hideModal}
                                                />
                                            </ButtonToolbar>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        ...state,
        show: false
    }
    // const { students, authentication } = state;
    // return {
    //     students,
    //     authentication
    // };
}

function AddNewStudentModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Új tanuló létrehozása
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <StudentForm />
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Bezár</Button><Button onClick={props.saveStudent}>Mentés</Button>
            </Modal.Footer>
        </Modal>
    );
}

const connectedStudentPage = connect(mapStateToProps)(StudentPage);
export { connectedStudentPage as StudentPage }