import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import YouTubeSearch from 'youtube-api-search';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const API_KEY = 'AIzaSyBvqwjrRkzkPambuMpFgRVYqvqDlYBHrHc';

YouTubeSearch({
    key: API_KEY,
    term: 'surfboards'},
function(data){
    console.log(data);
})


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }
    videoSearch(term){
        YouTubeSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div className="container">
                <SearchBar onSearchTermChange={videoSearch} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo} />
                    <VideoList
                        onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                        //이 함수는 하나의 목적을 가지고 있죠, 스테이트를 업데이트
                        //비디오를 가져와서 선택한 비디오를 업데이트 합니다.
                        //이 프로퍼티를 비디오 리스트로 전달
                        videos={this.state.videos}
                    />
                </div>
            </div>
        );
    }
}

export default App;
