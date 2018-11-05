var imageData = document.getElementById('mediaItems').value;
var root = document.getElementById('image-carousel');
var element = React.createElement(Components.ImageCarousel, { "imageData": imageData });
ReactDOM.render(element, root);