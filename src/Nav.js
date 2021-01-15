import React from "react";
import "./Nav.css";
function Nav() {
	return (
		<div className="nav">
			<img
				className="nav_logo"
				src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png"
				alt="Netlfix Logo"
				// width="200px"
				// height="70px"
			/>
			<img
				className="nav_avatar"
				src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
				alt="Netlfix Avatar"
				// width="70px"
				// height="70px"
			/>
		</div>
	);
}

export default Nav;
