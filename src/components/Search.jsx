import React from "react"

class Search extends React.Component {
    state = {
        search: "",
        type: "all",
    }

    handleKey = (e) => {
        if (e.key === "Enter") {
            this.props.searchMovies(this.state.search, this.state.type)
        }
    }

    handleFilter = (e) => {
        this.setState(
            () => ({ type: e.target.dataset.type }),
            () => this.props.searchMovies(this.state.search, this.state.type)
        )
    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            placeholder="search"
                            id="email_inline"
                            type="search"
                            className="validate"
                            value={this.state.search}
                            onChange={(e) =>
                                this.setState({ search: e.target.value })
                            }
                            onKeyDown={this.handleKey}
                        />
                        <button
                            className="btn purple lighten-3 search-btn"
                            onClick={() =>
                                this.props.searchMovies(
                                    this.state.search,
                                    this.state.type
                                )
                            }
                        >
                            search
                        </button>
                    </div>
                </div>
                <div>
                    <label>
                        <input
                            className=""
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={this.handleFilter}
                            checked={this.state.type === "all"}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className=""
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={this.handleFilter}
                            checked={this.state.type === "movie"}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className=""
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={this.handleFilter}
                            checked={this.state.type === "series"}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
        )
    }
}

export default Search
