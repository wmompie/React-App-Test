import React, { Component } from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';

class Jumbo extends Component {
  render() {
    return (
      <Jumbotron>
        <Grid>
          <div className="container">
            <h1>My App</h1>
            <p>This is a simple app.</p>
          </div>
        </Grid>
      </Jumbotron>
    );
  }
}

export default Jumbo;
