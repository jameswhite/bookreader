const url = 'https://127.0.0.1:8000/BookReaderDemo/laboratory.json';

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {
  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};

  // Fetch the JSON file and parse it into a JavaScript object
  response = fetch(url);
  options = response.json();

  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
}
