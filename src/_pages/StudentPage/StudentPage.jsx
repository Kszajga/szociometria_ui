import React from 'react';
import { connect } from 'react-redux';
import { studentActions } from '../../_actions/student.actions';

import { Table } from 'react-bootstrap';

class StudentPage extends React.Component {

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
                            <th colSpan="2">Tanulók</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.students &&
                            students.students.map(
                                (student, index) =>
                                    <tr key={index}>
                                        <td>{student.name}</td>
                                        <td>{student.class_id}</td>
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
    console.log("mapStateToProps -> state", state)
    const { students, authentication } = state;
    return {
        students,
        authentication

    };
}

const connectedStudentPage = connect(mapStateToProps)(StudentPage);
export { connectedStudentPage as StudentPage }