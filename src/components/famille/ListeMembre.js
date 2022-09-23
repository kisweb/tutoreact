import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios.get(`http://127.0.0.1:8000/membres/`).then((res) => {
      const persons = res.data.results;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person, index) => (
          <div key={index}>
            <h3>{person.nomComplet}</h3>
            <p>
              {person.datenaissance} à {person.lieunaissance}
            </p>
            <hr />
            <Link to={"/"}>Voir</Link>
          </div>
        ))}
      </ul>
    );
  }
}
