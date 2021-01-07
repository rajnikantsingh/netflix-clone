import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default instance; //  Export default means that we can use any name while importing it
