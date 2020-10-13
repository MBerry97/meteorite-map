import React from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="year" id="year-range">
          Year range:
          <input
            id="year"
            onChange={this.handleChange}
            name="startingYear"
            required
          ></input>
          -
          <input
            onChange={this.handleChange}
            name="endingYear"
            required
          ></input>
        </label>
        <label htmlFor="dropdown">
          Mass:
          <select
            id="dropdown"
            onChange={this.handleChange}
            name="mass"
            required
          >
            <option value="">--Please choose an option--</option>
            <option value="100-150">100 - 150kg</option>
            <option value="150-200">150 - 200kg</option>
            <option value="200-300">200 - 300kg</option>
            <option value="300-500">300 - 500kg</option>
            <option value="500+">500kg +</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default DataGatherer;
