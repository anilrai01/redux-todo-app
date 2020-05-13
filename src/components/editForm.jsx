import React, { Component } from 'react';
import styled, {css, keyframes} from "styled-components";
import FormInnerContent from './formInnerComponenet';
import {connect} from "react-redux";

const appear = keyframes`
    from {
        margin-top: -60vh;
    }
    to {
        margin-top: 0;
    }
`
const fade = keyframes`
    from {
        margin-top: 0;
    }
    to{
        margin-top: -60vh;
    }
`

const DispForm = styled.div `
    position: absolute;
    top: -50%;
    left: 50%;

    transform: translate(-50%, -50%); 

    margin: auto;
    width: 30%;
    height: 40%;
    
    opacity: 0;

    ${props => props.animationType && css`
        animation-name: ${props.animationType};
        animation-duration: 1s;
        animation-fill-mode: forwards;
    `}

    padding: 20px;
    background: #fff;
    box-shadow: 0px 4px 12px rgba(0,0,0,0.3);
    transition: 0.8s ease-in-out;
    transition-timing-function: cubic-bezier(0.54, 0.03, 0.45, 1.26);

    ${(props) => props.zoomStat && css`
        top: 50%;
        opacity: 1;
    `}
`

const mapStateToProps = state => {
    return {
        editStat : state.editStatus
    }
}

class EditForm extends Component {
    onSubmit = e =>{
        e.preventDefault();
    }
    render() { 
        return ( 
            <DispForm 
            animationType={this.props.editStat.animate} 
            zoomStat={this.props.editStat.editStatus} 
            >
                <FormInnerContent 
                btnName = {"Edit Form"} 
                setWidth = {"85%"}
                handleEdit={this.props.handleEdit}
                handleSubmit={this.onSubmit}
                />
            </DispForm>
         ); 
    }
}
 
export default connect(mapStateToProps)(EditForm);