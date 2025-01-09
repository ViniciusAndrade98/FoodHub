import React from "react";
import { Page, Title } from "./styles";
import Header from "../Header/header";
import InputLogin from "../Input/input";


const LoginPage = () => {
    return(
        <Page>
            <Header/>
            <Title>Sign up</Title>
            <InputLogin/>
        </Page>
    )
}

export default LoginPage;