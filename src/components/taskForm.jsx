import React, { Component } from 'react'
import FormInnerContent from "./formInnerComponenet";
import {AddData} from "../redux/Add Data/DataActionCreator"
import { connect } from "react-redux";

class TaskForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
            status : ''
        }
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state);
    }

    render() {
    return (
        <FormInnerContent 
        handleSubmit = {this.onSubmit}
        btnName = {'Add Task'}
        setWidth = {null}
        />
     );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTask : data => {
            dispatch(AddData(data))
        }
    }
}
 
export default connect(null, mapDispatchToProps)(TaskForm);