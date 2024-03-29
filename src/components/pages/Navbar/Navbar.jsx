import React from "react";
import { Link } from "react-router-dom";
import style from './Navbar.module.scss'

const Navbar = () => (
    <div className={style.container}>
        <h2>MDK Crud App</h2>
        <Link to='/'>
            <h3>Login</h3>
        </Link>
        <Link to='/register'>
            <h3>Register</h3>
        </Link>
    </div>
);

export default Navbar;