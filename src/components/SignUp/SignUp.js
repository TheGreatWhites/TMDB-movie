import React, { Component } from 'react';

import style from './SignUp.css';

var LoginForm = (props) => {
    return (
        <div className ={style.formOuterWrapper} >
            <form action="http://www.google.com" className={style.loginForm} method="POST">
                <div className={style.formInnerWrapper}>
                    <label htmlFor="username"> Username :</label>
                    <input type="text" name="username" placeholder="Username"/>
                    <label htmlFor="password"> Password :</label>
                    <input type="password" name="password" placeholder="Password"/>
                    <button type="submit"> Login </button>
                </div>
            </form>

            <div className={style.loginPrompt}>
                <div className={style.prompt}>
                    <a onClick = { () => {
                        props.history.push('/login');
                    }}>
                        Already a Member ? Login Here.
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;