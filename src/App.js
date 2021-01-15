import Row from "./Row.js";
import "./App.css";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="Rajni Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Rajni Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title="Rajni Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Rajni Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title="Rajni Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Rajni Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row
				title="Rajni Romance Movies"
				fetchUrl={requests.fetchRomanceMovies}
			/>
			<Row title="Rajni Documentaries" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
