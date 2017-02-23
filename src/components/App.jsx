class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      video: exampleVideoData[0]
    };
    this.videoClick = this.videoClick.bind(this);
  }

  videoClick () {
    this.setState = {
      video: this
    };
  }

  render() {
    return (<div>
      <Nav />
      <div className="col-md-7">
        <VideoPlayer video={this.state.video}/>
      </div>
      <div className="col-md-5">
        <VideoList videos={exampleVideoData} onClick={this.videoClick}/>
      </div>
    </div>);
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
// window.video = exampleVideoData[0];
