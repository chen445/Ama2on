import React from 'react'
import {Link} from 'react-router-dom';
class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.first_name,
      last_name: this.props.last_name,
      email: this.props.email,
      password: this.props.password,
    };
    this.handleClick = this.handleClick.bind(this);
    this.userDemoLogin = this.userDemoLogin.bind(this);
    this.errorClassName = this.errorClassName.bind(this);
    this.errors = this.errors.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  errors(errorField) {
    return this.props.errors[errorField] ? (
      <ul className="display-error">
        <li>{this.props.errors[errorField]}</li>
      </ul>
    ) : (
      ""
    );
  }

  errorClassName(errorField) {
    if (this.props.errors[errorField]) return "error";
    else return "";
  }

  userDemoLogin(e) {
    const user = { email: "demo@gmail.com", password: "123456" };
    this.props.demoAction(user);
  }

  clearSessionError() {
      this.clear
  }

  render() {
    const fisrt_name_input =
      this.props.first_name === undefined ? (
        ""
      ) : (
        <label>
          FirstName
          <br></br>
          <input
            type="text"
            className={this.errorClassName("firstNameError")}
            value={this.state.first_name}
            onChange={this.update("first_name")}
          />
          {this.errors("firstNameError")}
          <br />
          <br />
        </label>
      );

    const last_name_input =
      this.props.last_name === undefined ? (
        ""
      ) : (
        <label>
          LastName
          <br></br>
          <input
            type="text"
            className={this.errorClassName("lastNameError")}
            value={this.state.last_name}
            onChange={this.update("last_name")}
          />
          {this.errors("lastNameError")}
          <br />
          <br />
        </label>
      );

    const link = (
      <div>
        {this.props.displayLink.name} &nbsp;
        <Link
          to={this.props.displayLink.link}
          onClick={this.props.clearErrorAction}
        >
          {this.props.displayLink.to}
        </Link>
      </div>
    );

    return (
      <div>
        <Link to="/">
          <div className="login-log">
            {" "}
            <img src={window.logoURL1} alt="" />
          </div>
        </Link>
        <br></br>
        <form onSubmit={this.handleClick} className="session-form">
          <h1 className="header">{this.props.formType}</h1>
          <br />
          <div className="form-content">
            {this.errors("generalError")}
            <br></br>
            <label>
              Email
              <br />
              <input
                type="text"
                className={this.errorClassName("emailError")}
                value={this.state.email}
                onChange={this.update("email")}
              />
            </label>
            {this.errors("emailError")}

            <br />
            <br />
            <label>
              Password
              <br />
              <input
                type="password"
                className={this.errorClassName("passwordError")}
                value={this.state.password}
                onChange={this.update("password")}
              />
            </label>
            {this.errors("passwordError")}
            <br />
            <br />
            {fisrt_name_input}
            {last_name_input}
            <input type="submit" value={this.props.formType} />
            <br />
            <br />
            {link}
            <br />
            <button onClick={this.userDemoLogin}>Demo User</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm 