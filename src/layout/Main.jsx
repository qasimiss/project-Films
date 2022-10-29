import React from "react"
import Movies from "../components/Movies"
import Preloader from "../components/Preloader"
import Search from "../components/Search"
class Main extends React.Component {
    state = {
        movies: [],
    }

    searchMovies = (string, type = "all") => {
        fetch(
            `http://www.omdbapi.com/?apikey=ebf39a62&s=${string}${
                type !== "all" ? `&type=${type}` : ""
            }`
        )
            .then((responce) => responce.json())
            .then((data) => this.setState({ movies: data.Search }))
    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=ebf39a62&s=matrix")
            .then((responce) => responce.json())
            .then((data) => this.setState({ movies: data.Search }))
    }

    render() {
        const { movies } = this.state

        return (
            <main className="container content">
                <Search searchMovies={this.searchMovies} />
                {movies.length ? <Movies movies={movies} /> : <Preloader />}
            </main>
        )
    }
}
export default Main
