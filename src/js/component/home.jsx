import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

import {NavBar} from "./navbar.jsx";
import {Jumbotron} from "./jumbotron.jsx";
import {Cards} from "./card.jsx";
import {Footer} from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<NavBar />
			<div className="container">
				<Jumbotron />
				<div className="row justify-content-around my-5">
					<Cards />
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
