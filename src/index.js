import React, {Component} from 'react';
var ReactDOM = require('react-dom');
import _ from 'lodash';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDnsMk4Y7RINwOrlMXIGdywKsE-fvVisxk';



//create a new component, this should produce some html

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			videos: [],
			selectedVideo: null,
		};	

		this.videoSearch('surfboards');
	}

	render(){
		const videoSearch = _.debounce((term)=>{this.videoSearch(term)}, 300)
		return(
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video = {this.state.selectedVideo}/>
				<VideoList 
					onVideoSelect = {(selectedVideo)=>this.onVideoSelect(selectedVideo)}
					videos = {this.state.videos} 	
				/>
			</div>
		)
	}

	onVideoSelect(video){
		this.setState({selectedVideo: video});
	}


	videoSearch(term){
		YTSearch({key: API_KEY, term: term}, (videos)=>{
			//syntactic sugar - when doing something like videos: videos, 
			//you can just do videos
			this.setState({
				videos: videos,
				selectedVideo: videos[0],
				term: term
			});
		})	
	}
}


//insert the component into the dom

ReactDOM.render(<App/>, document.getElementById('container'));