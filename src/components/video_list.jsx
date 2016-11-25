import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props)=>{

	var videoItems = props.videos.map((video)=>{
					return <VideoListItem 
						video = {video} 
						key = {video.etag}
						onVideoSelect = {props.onVideoSelect}
					/>
				})
	return (
		<div>
			<ul className = "col-md-4 list-group">
				{videoItems}

			</ul>
		</div>
	)
}

export default VideoList;