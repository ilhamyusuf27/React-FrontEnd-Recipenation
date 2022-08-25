import React from "react";
import { Button } from "react-bootstrap";
import { FiPlay } from "react-icons/fi";

function DetailRecipeContent({ recipe }) {
	return (
		<>
			<div className="mb-5">
				<div className="mb-4">
					<h3 className="mb-4">Ingredients</h3>
					<p dangerouslySetInnerHTML={{ __html: recipe?.ingredients?.split("\n").join("<br />") }} />
				</div>
				<div className="mb-4">
					<h3 className="mb-4">Video Step</h3>
					<Button variant="warning" className="button-video" href={recipe?.video_link} target="_blank" disabled>
						<FiPlay className="text-white" />
					</Button>
				</div>
			</div>
		</>
	);
}

export default DetailRecipeContent;
