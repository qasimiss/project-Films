import React from "react"
import Movies from "../components/Movies"
import Preloader from "../components/Preloader"
class Main extends React.Component {

    state = {
        movies: [],

    }

    componentDidMount() {
        fetch("http://www.omdbapi.com/?apikey=ebf39a62&s=matrix")
        .then(responce => responce.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render () {

        const {movies} = this.state

        return (
            <main className="container content">
                {
                    movies.length
                    ? <Movies movies={movies} />
                    : <Preloader />
                }
                
            </main>
        )
    }
    
}
export default Main