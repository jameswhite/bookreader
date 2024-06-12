const url = 'http://127.0.0.1:8000/BookReaderDemo/laboratory.json';

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {
  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};

  // Fetch the JSON file and parse it into a JavaScript object
  let options;
  fetch(url, { method: 'GET' })
    .then(function(response) { return response.json(); })
    .then( function(json) {
      console.log(json); options = json; console.log(options); 
  console.log(options);
  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
  });

}