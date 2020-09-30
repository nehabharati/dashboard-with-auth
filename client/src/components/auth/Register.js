import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import { Link, withRouter } from 'react-router-dom'
import classnames from "classnames";

function Register(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleName = (e) => setName(e.target.value)
    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors])

    const handleSubmit = (e) => {
        e.preventDefault()
        //Create user object
        const newUser = {
            name,
            email,
            password
        }

        //Attempt to register
        props.registerUser(newUser, props.history)
    }

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={handleName}
                    className={classnames("", {
                        invalid: errors.name
                    })}
                />
                <span className="red-text">{errors.name}</span>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleEmail}
                    className={classnames("", {
                        invalid: errors.email
                    })}
                />
                <span className="red-text">{errors.email}</span>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    onChange={handlePassword}
                    className={classnames("", {
                        invalid: errors.password
                    })}
                />
                <span className="red-text">{errors.password}</span>
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </form>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { registerUser }
)(withRouter(Register));