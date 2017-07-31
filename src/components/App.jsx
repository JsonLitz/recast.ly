class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      videos: exampleVideoData,
      selectedVideo: exampleVideoData[0]
    };
  }

  handleVideoListEntryTitleClick (video) {
    this.setState ({
      selectedVideo: video
    });
  }

  performSearch (query) {
    searchYouTube(options, (videos) =>
    this.setState({
      videos: videos,
      selectedVideo: videos[0]
    })
  )

  class Greet extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }

  render() {
    return (
      <div>
        <Sup

          />
      </div>
    );
  }
}

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">

          <Search />

        </div>
      </nav>
      {console.log(props)}
      <div className="row">
        <div className="col-md-7">
          <div>

            <VideoPlayer video = {this.state.selectedVideo}/>

          </div>
        </div>
        <div className="col-md-5">

          <VideoList
            handleVideoListEntryTitleClick = {this.handleVideoListEntryTitleClick.bind(this)}
            videos = {exampleVideoData}
            />

        </div>
      </div>
    </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
