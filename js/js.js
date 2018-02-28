var init = 0;
var image = [];
var time = 5000;


image[0] = 'img/wall2.png';
image[1] = 'img/wall1.png';

var marginY = 0;
var destination = 0;
var speed = 10;
var scroll = null; 



function changeImg(){

  document.header.src = image[init];

  if(init < image.length - 1){
    init++;
  }
  else {
    init = 0;
  }

  setTimeout("changeImg()", time);
}




function initScroll(elementId){
  destination = document.getElementById(elementId).offseTop;

  scroll = setTimeout(function() {
      initScroll(elementId);
  }, 1);

  marginY = marginY + speed;

  if(marginY >= destination){
    clearTimeout(scroll);
  }
  window.scroll(0,marginY);
}

window.onload = changeImg;

