class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPlaying: exampleVideoData[0]
    };
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo (video) {
    this.setState ({
      videoPlaying: video
    });
  }

  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.videoPlaying}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData} playVideo={this.playVideo}/>
      </div>
    </div>);
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// window.video = exampleVideoData[0];
