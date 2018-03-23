import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
    const imageUrl = video.snippet.thumbnails.default.url;

    return(
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} alt="" />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li >
        //이 프로퍼티는 클릭할때마다 전달한 함수를 호출 합니다.
        //각 비디오 리스트 아이템은 다른 비디오를 가지고 있기 때문에 해당 비디오를 보게 됩니다.
    );
}
export default VideoListItem;