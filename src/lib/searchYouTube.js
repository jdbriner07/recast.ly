var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${options.query}&key=${options.key}&maxResults=${options.max}&type=video&videoEmbeddable=true`,
    maxResults: options.max || 5,
    type: 'GET',
    success: data => callback(data.items),
    error: () => console.error('data wasn\'t retrieved') 
  });
};

window.searchYouTube = searchYouTube;


