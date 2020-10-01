import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { loginUser } from "../../actions/authActions"
import classnames from 'classnames'

function Login(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({})

    const handleEmail = (e) => setEmail(e.target.value)
    const handlePassword = (e) => setPassword(e.target.value)

    useEffect(() => {
        // If logged in and user navigates to Login page, should redirect them to dashboard 
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard/1");
        }
    }, [])

    useEffect(() => {
        setErrors(props.errors)
        if (props.auth.isAuthenticated) {
            props.history.push("/dashboard/1");
        }
    }, [props.auth.isAuthenticated, props.error])

    const handleSubmit = (e) => {
        e.preventDefault()
        //Create user object
        const newUser = {
            email,
            password
        }

        //Login
        props.loginUser(newUser, props.history)
    }

    return (
        <div>
            <h1>Login</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    error={errors.email}
                    placeholder="Email"
                    onChange={handleEmail}
                    className={classnames("", {
                        invalid: errors.email || errors.emailnotfound
                    })}
                />
                <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                </span>
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    error={errors.password}
                    placeholder="Password"
                    onChange={handlePassword}
                    className={classnames("", {
                        invalid: errors.password || errors.passwordincorrect
                    })}
                />
                <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                </span>
                <button type="submit">Login</button>
                <p className="grey-text text-darken-1">
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
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
    { loginUser }
)(withRouter(Login))