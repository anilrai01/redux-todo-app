import React, {Component} from 'react'
import styled from "styled-components";
import { connect } from "react-redux";
import {PreEditData} from "../redux/Add Data/DataActionCreator"
import EditForm from "./editForm";

const H2 = styled.h2`
    display: inline;
`

const TaskList = styled.div`
    width: 80%;
    height: auto;
    margin: 3rem auto;
    box-shadow: 0px 2px 9px rgba(0,0,0,0.2);
    padding: 5px 10px;

    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
`
const TaskTitle = styled.div`
    display: flex;
    flex-direction: row;
`
const Button = styled.button`
    padding: 15px;
    margin: 2rem 0;
    background: none;
    outline: none;
    border: 1px solid #ccc;;
    font-size: 1rem;
    transition: 0.3s ease;
    &:hover{
        background: #1e90ff;
        color: #fff;
        // font-size: 1.2rem;
    }
`


const mapStateToProps = (state) => {
    return {
        task : state.tasksData,
        editStat : state.editStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editStat : () => {
            dispatch(PreEditData())
        }
    }
}

class Tasks extends Component{

    onEdit = () => {
        this.props.editStat();
    }

    render() {
    return (
        <React.Fragment>
        {this.props.editStat.editStatus ? <EditForm zoom={this.props.editStat.editStatus} handleEdit={this.onEdit}/> : <EditForm zoom={this.props.editStat.editStatus} handleEdit={this.onEdit}/> }
        <TaskList>
        {this.props.task.map(el => (
            <div key={el.id} style = {{ "paddingTop" : 5, "paddingBottom" : 10, "margin" : 10}}>
            <TaskTitle>
                <H2>Task Title :</H2>
                <H2 style={{ 'marginLeft' : 10, 'fontSize' : 22, 'fontWeight' : 300 }}>{el.title}</H2>
            </TaskTitle>
            <H2>Task Description :</H2>
            <br />
            <p style={{'marginTop' : 10}}>{el.body}</p>
            <br />
            <TaskTitle>
                <H2>Task Status :</H2>
                <H2 style={{ 'marginLeft' : 10, 'fontSize' : 22, 'fontWeight' : 300 }}>{el.status}</H2>
            </TaskTitle>
            <Button onClick = {this.onEdit}>Edit Task</Button>
            </div>
        ) )}
        </TaskList>
        </React.Fragment>
     );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);