import React from 'react'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from "../actions/authActions";

function Navbar(props) {
    function handleClick(e) {
        e.preventDefault()
        props.logoutUser();
        props.history.push("/")
    }

    return (
        <div className="navbar">
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/register">
                        <li>Register</li>
                    </Link>
                    {!props.auth.isAuthenticated ? (
                        <Link to="/login">
                            <li>Login</li>
                        </Link>
                    ) : (
                            <div style={{ display: "flex" }}>
                                <Link to="/dashboard/1">
                                    <li>Dashboard</li>
                                </Link>
                                <Link to="/login" onClick={handleClick}>
                                    <li>Logout</li>
                                </Link>
                            </div>
                        )}
                </ul>
            </nav>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(withRouter(Navbar))