console.log('Loaded!');

// Change the text of the main-text div
var element = document.getElementById('main-text');

element.innerHTML = 'New value';

//Move the image
var img = document.getElementById('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpN-7MaRtIbKXZm2cqNFu2xUgtYp5N44VwWsFvhnnFU1yxRAnn');
img.onclick = function () {
  img.style.marginleft = '100px';  
};