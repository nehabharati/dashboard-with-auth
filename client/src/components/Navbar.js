import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
                    <Link to="/login">
                        <li>Login</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}