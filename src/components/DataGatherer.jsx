import React from 'react';
import styled from 'styled-components';
import { Button, TextField, Select } from '@material-ui/core';

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
`;

const InputField = styled.label`
  margin-bottom: 15px;
`;

class DataGatherer extends React.Component {
  state = {
    userInputs: {
      startingYear: '',
      endingYear: '',
      mass: '',
    },
  };

  handleChange = (event) => {
    const userChoice = event.target.value;
    const nameOfElement = event.target.name;
    this.setState((previousState) => {
      return {
        userInputs: {
          ...previousState.userInputs,
          [nameOfElement]: userChoice,
        },
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { startingYear, endingYear, mass } = this.state.userInputs;
    this.props.addData(startingYear, endingYear, mass);
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <InputField htmlFor='year' id='year-range'>
          Year range :
          <TextField
            id='year'
            onChange={this.handleChange}
            name='startingYear'
            required
          ></TextField>
          -
          <TextField
            onChange={this.handleChange}
            name='endingYear'
            required
          ></TextField>
        </InputField>
        <InputField htmlFor='dropdown'>
          Mass:
          <Select
            id='dropdown'
            onChange={this.handleChange}
            name='mass'
            required
          >
            <option value=''>--Please choose an option--</option>
            <option value='100-150'>100 - 150kg</option>
            <option value='150-200'>150 - 200kg</option>
            <option value='200-300'>200 - 300kg</option>
            <option value='300-500'>300 - 500kg</option>
            <option value='500+'>500kg +</option>
          </Select>
        </InputField>
        <Button variant='contained' color='primary' type='submit'>
          Submit
        </Button>
      </FormContainer>
    );
  }
}

export default DataGatherer;
