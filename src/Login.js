import React from 'react'
import './Login.css'
import { loginUrl } from './spotify'

function Login() {
	return (
		<div className="login">
			<div className="wrapper">
				<img
					src="https://cdn.usbrandcolors.com/images/logos/spotify-logo.svg"
					alt="Spotify logo"
				/>
				<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
			</div>
		</div>
	)
}

export default Login
