const url = 'https://127.0.0.1:8000/BookReaderDemo/laboratory.json';

// Create the BookReader object
function instantiateBookReader(selector, extraOptions) {
  selector = selector || '#BookReader';
  extraOptions = extraOptions || {};

  // Fetch the JSON file and parse it into a JavaScript object
  const response = await fetch(url);
  const options = await response.json();

  $.extend(options, extraOptions);
  var br = new BookReader(options);
  br.init();
}
