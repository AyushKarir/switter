// Create a new component for GoogleLogin
import React from "react";
import { GoogleLogin as GoogleLoginComponent } from "@react-oauth/google";

export default function GoogleLogin(props) {
    const handleSuccess = (cred) => {
        console.log(cred); // Or perform any other action you want
    };

    return <GoogleLoginComponent onSuccess={handleSuccess} {...props} />;
}
