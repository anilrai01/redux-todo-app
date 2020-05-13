import React, {Component} from 'react';
import './App.css';
import Tasks from "./components/tasks";
import TaskForm from "./components/taskForm"
import EditForm from "./components/editForm";
import styled from "styled-components";

const H1 = styled.h1`
  text-align: center;
`;

const H2 = styled.h2`
    text-align: center;
    margin-top: 2rem;
`

class App extends Component {
  state = {  }

  render() { 
    return ( 
      <React.Fragment>
      {/* <EditForm></EditForm> */}
      <H1>Cloerix World</H1>
      <H2>Welcome to your daily tasks list</H2>

      <TaskForm/>
      <Tasks />
      </React.Fragment>
     );
  }
}
 
export default App;