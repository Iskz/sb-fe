import React, {Component} from "react";
import Button from '@material-ui/core/Button';
import { doLogin, checkToken } from "../../helpers";

function LoginView() {

    function handleLogin() {
        checkToken();
    }

    return (
        <>
            <h1>LOGIN HERE</h1>
            <Button onClick={handleLogin}>LOGIN
            </Button>
        </>
    )
}

export default LoginView;