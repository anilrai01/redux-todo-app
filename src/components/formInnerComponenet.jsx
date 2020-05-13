import React, { Component } from 'react'
import styled, {css} from "styled-components";

const ContentArea = styled.div`
    width: 40%;
    margin: auto;
    height: auto;
    ${(props) => props.widthValue && css`
        width: ${props => props.widthValue}
    `
    }
`

const Form = styled.form`
    display: flex;
    justify-conetent: center;
    flex-direction: column;
`

const Input = styled.input`
    padding: 10px;
    outline: none;
    border 1px solid #ccc;
    border-radius: 20px;
`

const Label = styled.label`
    font-weight; bold;
    font-size: 1.3rem;
`
const TextArea = styled.textarea`
    resize: vertical;
    padding: 10px;
    outline: none;
    border 1px solid #ccc;
    border-radius: 20px;
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
        font-size: 1.2rem;
    }
`

const Select = styled.select`
    border: 1px solid #ccc;
    border-radius: 20px;
    background: none;
    padding: 10px;
    margin-top: 2rem;
    outline: none;
`

class FormInnerContent extends Component {
    state = {
        title: '',
        body: '',
        status : ''
    }

    onChange = e =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() { 
        return (
        <ContentArea widthValue={this.props.setWidth}>
            <Form onSubmit={this.props.handleSubmit}>
            <Label>Title</Label>
            <Input type="text" name="title" id="title" placeholder="Task Title" value={this.state.title} onChange={this.onChange}/>
            <br/>
            <Label>Body</Label>
            <TextArea placeholder="Task Description" id="body" name="body" value={this.state.body} onChange={this.onChange} />
            <Select name="status" value={this.state.status} onChange={this.onChange}>
                <option value = "Incomplete">
                    Incomplete
                </option>
                <option value = "Complete">
                    Complete
                </option>
            </Select>
            <Button onClick={this.props.handleEdit && this.props.handleEdit}>{this.props.btnName}</Button>
        </Form>
        </ ContentArea>
         );
    }
}
 
export default FormInnerContent;