import React from "react"
import { BsThreeDots , BsHeart } from 'react-icons/bs';
import "./post.css"

const Post = () => {
	return (
		<div className="card">
			<div className="card_nav">
					<p className="post_dp" >img</p>
					<p className="post_user">Username</p>
				<div>
					<BsThreeDots className="post_dot" />
				</div>
			</div>
			<img src="" alt=""/>
			<div>
				<BsHeart />
			</div>
		</div>
		);
}

export default Post;