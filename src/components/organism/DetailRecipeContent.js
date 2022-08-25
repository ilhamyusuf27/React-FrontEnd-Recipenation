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
				{recipe?.video_link?.length ? (
					<div className="mb-4">
						<h3 className="mb-4">Video Step</h3>
						{recipe?.video_link?.map((item) => (
							<div className="mb-3">
								<Button variant="warning" className="button-video" href={item} target="_blank">
									<FiPlay className="text-white" />
								</Button>
							</div>
						))}
					</div>
				) : null}
			</div>
		</>
	);
}

export default DetailRecipeContent;
