import React from "react";
import "./App.css";
import { fade, withStyles, makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const ValidationTextField = withStyles({
  root: {
    "& input:valid + fieldset": {
      borderColor: "green",
      borderWidth: 2
    },
    "& input:invalid + fieldset": {
      borderColor: "red",
      borderWidth: 2
    },
    "& input:valid:focus + fieldset": {
      borderLeftWidth: 6,
      padding: "4px !important" // override inline-style
    }
  }
})(TextField);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      username: "",
      job: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      firstname: e.target.firstname,
      lastname: e.target.lastname,
      email: e.target.email,
      username: e.target.username,
      job: e.target.job
    });
  }
  handleSubmit(e) {
    alert();
    e.preventDefault();
  }
  render() {
    const mystyle = { margin: "10px", align: "center" };
    return (
      <div>
        <form onChange={this.handleSubmit}>
          <ValidationTextField
            label="First Name"
            name="firstname"
            required
            variant="outlined"
            value=""
            id="validation-outlined-input"
            style={mystyle}
            value={this.state.firstname}
            onChange={this.handleChange}
          />
          <br />
          <ValidationTextField
            label="last Name"
            name="lastname"
            required
            variant="outlined"
            value=""
            id="validation-outlined-input"
            style={mystyle}
            value={this.state.lastname}
            onChange={this.handleChange}
          />
          <br />
          <ValidationTextField
            label="Email"
            name="email"
            required
            variant="outlined"
            value=""
            id="validation-outlined-input"
            style={mystyle}
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <ValidationTextField
            label="Username"
            name="username"
            required
            variant="outlined"
            value=""
            id="validation-outlined-input"
            style={mystyle}
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br />
          <ValidationTextField
            label="Job"
            name="job"
            required
            variant="outlined"
            value=""
            id="validation-outlined-input"
            style={mystyle}
            value={this.state.job}
            onChange={this.handleChange}
          />
          <br />
          <Button variant="outlined" color="primary" type="submit" >
            submit
          </Button>
        </form>
      </div>
    );
  }
}

export default App;
