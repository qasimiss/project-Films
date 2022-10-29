const Header = () => {
    return (
        <header>
            <nav className="purple darken-4">
                <div className="nav-wrapper">
                    <a
                        href="https://qasimiss.github.io/project-Films/"
                        className="brand-logo"
                    >
                        React Movies
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li>
                            <a href="https://github.com/qasimiss/project-Films/tree/master">
                                Repository
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
