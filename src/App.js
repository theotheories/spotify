import "./App.css";
import React, { useState, useEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
	const [{ user, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = "";
		const _token = hash.access_token;
		// prettier-ignore
		const numberOfPlaylists = { "limit": 50, };

		if (_token) {
			dispatch({
				type: "SET_TOKEN",
				token: _token,
			});

			spotify.setAccessToken(_token);

			spotify.getMe().then((user) => {
				dispatch({
					type: "SET_USER",
					user,
				});
			});

			spotify.getUserPlaylists(numberOfPlaylists).then((playlists) => {
				dispatch({
					type: "SET_PLAYLISTS",
					playlists,
				});
			});

			spotify.searchPlaylists("Discover Weekly", { limit: 1 }).then((data) =>
				spotify.getPlaylist(data?.playlists?.items[0]?.id).then((playlist) => {
					dispatch({
						type: "SET_DISCOVER_WEEKLY",
						discover_weekly: playlist,
					});
				})
			);
		}
	}, []);

	return (
		<div className="App">
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
