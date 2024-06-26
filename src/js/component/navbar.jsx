import React from "react";

export const NavBar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-dark m-0 fixed-top">
        <div className="container">
            <a className="navbar-brand text-light" href="#">Start Bootstrap</a>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                </nav>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-light" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
	);
};

