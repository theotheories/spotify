import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
	return (
		<div className="login">
			<img
				src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg"
				alt="Spotify logo"
			/>
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
