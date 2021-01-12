import React from "react";
import { getUser } from '../Redux/Actions'
import { connect } from "react-redux";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      name: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.verifyLogin = this.verifyLogin.bind(this);

  }

  handleInput({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  verifyLogin() {
    const { name, email } = this.state;
    if ( name.length>0 && email.length>0 ){
      return false;
    }
    return true;
  }

  render() {
    const {name, email} = this.state;
    const { getUserProps } = this.props;
    return (
      <div>
        <input onChange={this.handleInput} value={ name } name="name" data-testid="input-player-name" type="text" />
        <input onChange={this.handleInput} value={ email } name="email" data-testid="input-gravatar-email" type="text" />
        <button onClick={()=>getUserProps(email, name)} disabled={this.verifyLogin()} data-testid="btn-play" type="button">
          Jogar
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUserProps: (email, name) => dispatch(getUser(email, name))
})

export default connect(null, mapDispatchToProps)(Login);