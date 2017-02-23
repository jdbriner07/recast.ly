var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search' /*+ options.query + '&key=' + options.key*/,
    maxResults: options.max || 5,
    type: 'GET'
  });
};

window.searchYouTube = searchYouTube;
