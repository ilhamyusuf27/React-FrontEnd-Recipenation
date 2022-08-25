import React from "react";
import Logo from "../../Asset/images/logo.svg";

function BgSide() {
	return (
		<>
			<div className="side-bg px-5 d-flex justify-content-center align-items-center" id="left-bg">
				<img src={Logo} alt="bg" />
			</div>
		</>
	);
}

export default BgSide;
