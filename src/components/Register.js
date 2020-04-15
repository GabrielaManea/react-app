import React, {Component} from 'react';
import '../App.css';
import'./history';



const regExp = RegExp(
    /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
)

const formValid = ({ isError, ...rest }) => {
    let isValid = false;

    Object.values(isError).forEach(val => {
        if (val.length > 0) {
            isValid = false
        } else {
            isValid = true
        }
    });

    Object.values(rest).forEach(val => {
        if (val === null) {
            isValid = false
        } else {
            isValid = true
        }
    });

    return isValid;
};

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            cpassword: null,
            error: {
                name: "",
                email: "",
                password: "",
                cpassword: ""
            }

        }  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
          
    }

    handleSubmit = e => {
        e.preventDefault();

        if (formValid(this.state)) {
            console.log(this.state)
        } else {
            console.log("Form is invalid!");
        }
    };


    handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target;
        let error = { ...this.state.error };

        switch (name) {
            case "name":
                error.name =
                    value.length < 3 ? "atleast 3 characaters required" : "";
                break;
            case "email":
                error.email = regExp.test(value)
                    ? ""
                    : "email address is invalid";
                break;
            case "password":
                error.password =
                    value.length < 7 ? "atleast 7 characaters required" : "";
                break;
            case "cpassword":
                error.cpassword =
                    value !== this.state.password ? "not the same" : "";
                break;
            default:
                break;
        }

        this.setState({
            error,
            [name]: value
        })
    };

    isRegisterBtnDisabled = () => {
        const { name, email, password, cpassword, error } = this.state;
    
        if (!name || !email || !password || !cpassword) {
          return true;
        }
        const foundError = Object.values(error).some((e) => e.length > 0);
    
        if (foundError) {
          return true;
        }
    
        return false;
      };

    render() {
        const { error } = this.state;
        return(
            <div className="register-container">
                <h2>Register for more!</h2>
            <form onSubmit={this.onSubmit} noValidate>
                <div className="form-container">
                    <input
                        type="text"
                        className={error.name.length > 0 ? "invalid" : ""}
                        name="name"
                        onChange={this.handleChange}
                        placeholder="Name"
                    />
                    {error.name.length > 0 && (
                        <span className="invalid-msg">{error.name}</span>
                    )}
                </div>

                <div className="form-container">
                    <input
                        type="email"
                        className={error.email.length > 0 ? "invalid" : ""}
                        name="email"
                        onChange={this.handleChange}
                        placeholder="Email"
                    />
                    {error.email.length > 0 && (
                        <span className="invalid-msg">{error.email}</span>
                    )}
                </div>

                <div className="form-container">
                    <input
                        type="password"
                        className={error.password.length > 0 ? "invalid" : ""}
                        name="password"
                        onChange={this.handleChange}
                        placeholder="Password"
                    />
                    {error.password.length > 0 && (
                        <span className="invalid-msg">{error.password}</span>
                    )}
                </div>

                <div className="form-container">
                    <input
                        type="password"
                        className={error.password.length > 0 ? "invalid" : ""}
                        name="cpassword"
                        onChange={this.handleChange}
                        placeholder="Confirm Password"
                    />
                    {error.cpassword.length > 0 && (
                        <span className="invalid-msg">{error.cpassword}</span>
                    )}
                </div>

                <button type="submit" className="btn" disabled = {this.isRegisterBtnDisabled()} onClick={() => this.props.history.push("/todo")}>Log in</button>
            </form>
            </div>
        )
    }
}
export default Register;