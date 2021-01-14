import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl , isLargeRow }) {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		// if [] Then Run Once and then dont run it again, if movies, then it will run again when movie changes
		async function fetchData() {
			const request = await axios.get(fetchUrl);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchUrl]); // all variables which are being passed, should be in the array
	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="row_posters">
				{movies.map((movie) => (
					<img
						key={movie.div}
						src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
							}`}
						alt={movie.name}
						className={`row_poster ${isLargeRow && "row_posterLarge"}`}
					/>
				))}
			</div>
		</div>
	);
}

export default Row;
