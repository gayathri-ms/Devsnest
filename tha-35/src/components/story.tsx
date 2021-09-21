import React from "react"
import "./story.css"

const Story = () => {
	return(
		<div className="story">
			{
				[...Array(20)].map((_ , i) => (<div className="story_img" >Hello</div>))
			}
		</div>
		);
}

export default Story;