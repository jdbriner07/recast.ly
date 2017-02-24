class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlaying: videoInit[0],
      videoList: videoInit
    };
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo (video) {
    this.setState ({
      videoPlaying: video
    });
  }

  componentDidMount() {
    console.log('mounted');
    this.youtubeSearch('smoothiethecat');
  }

  youtubeSearch(query) {
    var options = {
      query: query, 
      key: window.YOUTUBE_API_KEY, 
      max: 5
    };

    this.props.searchYouTube(options, (videos) => {
      this.setState ({
        videoPlaying: videos[0],
        videoList: videos
      });
    });
  }
 
  render() {
    return (<div>
      <Nav handleSearchChange={this.youtubeSearch.bind(this)}/>
      <div className="col-md-7">;
        <VideoPlayer video={this.state.videoPlaying}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={this.state.videoList} playVideo={this.playVideo}/>
      </div>
    </div>);
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// window.video = exampleVideoData[0];


var videoInit = [{
  kind: '',
  etag: '',
  id: {
    kind: '',
    videoId: ''
  },
  snippet: {
    publishedAt: '',
    channelId: '',
    title: '',
    description: '',
    thumbnails: {
      default: {
        url: '',
        width: 0,
        height: 0
      },
      medium: {
        url: '',
        width: 0,
        height: 0
      },
      high: {
        url: '',
        width: 0,
        height: 0
      }
    },
    channelTitle: '',
    liveBroadcastContent: ''
  }
}];