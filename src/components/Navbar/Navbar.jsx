import img1 from '../../assets/track.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img
                            src={img1}
                            className="img-fluid"
                            alt="Brand"
                            style={{
                                maxWidth: '150px', 
                                height: 'auto', 
                            }}
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 gap-5 mx-4 ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Sign In</a>
                            </li>
                        </ul>
                        <div className="d-flex m-3">
                            <button
                                type="button"
                                className="btn btn-lg me-3"
                                style={{
                                    backgroundColor: 'rgb(68, 125, 188)', 
                                    borderColor: 'rgb(68, 125, 188)',    
                                    borderTopLeftRadius: '10px',
                                    borderTopRightRadius: '10px',
                                    borderBottomLeftRadius: '10px',
                                    borderBottomRightRadius: '0px',
                                    color: '#fff', 
                                }}
                            >
                                Get started
                            </button>
                            <div className="nav-item dropdown mt-2 pe-5">
                                <a className="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Eng
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">English</a></li>
                                    <li><hr className="dropdown-divider" /></li>

                                    <li><a className="dropdown-item" href="#">Hindi</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Spanish</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
