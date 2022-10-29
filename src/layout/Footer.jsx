const Footer = () => {
    return (
        <footer className="page-footer purple darken-2">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a
                        className="grey-text text-lighten-4 right"
                        href="https://github.com/qasimiss/project-Films/tree/master"
                    >
                        Repository
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
