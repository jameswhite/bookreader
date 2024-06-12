const url = 'http://127.0.0.1:8000/BookReaderDemo/laboratory.json';
options = {}

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {
  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};

  // Fetch the JSON file and parse it into a JavaScript object
  fetch(url, { method: 'GET' }).then(function(response) { return response.json(); }).then(function(json) { options = json; });

  $.extend(options, extraOptions);
  var br = new BookReader(options);
  console.log(options);
  br.init();
}
