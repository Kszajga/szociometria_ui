import React from 'react';
import { connect } from 'react-redux';
import { studentActions } from '../../_actions/student.actions';

class StudentPage extends React.Component {

    componentDidMount() {
        this.props.dispatch(studentActions.getAllByUser());
    }

    render() {
        const { students } = this.props;
        return (
            <div>Tanulók</div>
        );
    }
}

function mapStateToProps(state) {
    const { students } = state;
    return {
        students
    };
}

const connectedStudentPage = connect(mapStateToProps)(StudentPage);
export { connectedStudentPage as StudentPage }