var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search',{
      part: 'snippet',
      q: 'query',
      type: 'video',
      key: key
    })
    .done(({items}) => {
      if(callback){
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
  };
window.searchYouTube = searchYouTube;
