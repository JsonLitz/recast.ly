// TODO: Render the `App` component to the DOM
console.log('sanity check', window.fakeVideoData);

ReactDOM.render(<App searchYouTube={searchYouTube} API={YOUTUBE_API_KEY}/>,
document.getElementById('app'));
