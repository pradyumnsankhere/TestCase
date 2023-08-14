import React, { Component } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

interface LoginFormProps {}

interface LoginFormState {
  username: string;
  password: string;
  showLoginSuccess: boolean;
}

export class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);

    this.state = {
      username: "",
      password: "",
      showLoginSuccess: false,
    };
  }

  handleLogin = () => {
    const { username, password } = this.state;
    console.log("This is your login and Password :", username, password);
    console.log("Login Success");
    this.setState({ showLoginSuccess: true });
  };
  handleDelete = () => {
    this.setState({
      username: "",
      password: "",
      showLoginSuccess: false,
    });
  };

  render() {
    const { username, password, showLoginSuccess } = this.state;

    return (
      <Box style={{ maxWidth: "400px", margin: "auto" }}>
        <h2>Login</h2>
        <TextField
          label="Username"
          fullWidth
          value={username}
          onChange={(e) => this.setState({ username: e.target.value })}
          margin="normal"
          data-testid="username-input"
        />
        <TextField
          label="Password"
          fullWidth
          type="password"
          value={password}
          onChange={(e) => this.setState({ password: e.target.value })}
          margin="normal"
          data-testid="password-input"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleLogin}
          data-testid="login-button"
        >
          Login
        </Button>
        {showLoginSuccess && <p data-testid="login-success">Login Success</p>}
      </Box>
    );
  }
}
