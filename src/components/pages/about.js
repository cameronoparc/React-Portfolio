import React from "react";
import profilePicture from "../../../static/assets/bio/headshot.jpg";

export default function () {
	return (
		<div className="content-page-wrapper">
			<div
				className="left-column"
				style={{
					background: "url(" + profilePicture + ") no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			/>
			<div className="right-column">
				Placheholder Bio Irure elit dolor esse labore eu.Anim sint adipisicing
				aliqua tempor aute sint. Consequat exercitation exercitation elit ex
				proident officia ad ex aliquip quis nostrud reprehenderit labore. Lorem
				ad eu irure velit excepteur. Proident voluptate ea nulla aliqua aliquip
				ea magna cillum eu proident Lorem duis commodo. Dolor proident nisi
				adipisicing nisi in pariatur dolor qui aliquip id dolore. In excepteur
				reprehenderit fugiat cillum.
			</div>
		</div>
	);
}
