'use strict';
// Created by Vitalii Yaremenko
// http://nicky-wicky.github.io

(function() {

  function logger() {
    //console.log(arguments);
  }

  window.addEventListener('load', function(){

    logger('page load!');
    var wrappers = document.querySelectorAll('.picWatcher');

    for (var i = 0; i <= wrappers.length - 1; i++) {

      var wrap = wrappers[i];
      var img = wrappers[i].childNodes[0].nextElementSibling;

      // Style css
      wrap.style.backgroundColor = 'black';
      wrap.style.width = wrappers[i].getAttribute('data-width');
      wrap.style.height = wrappers[i].getAttribute('data-height');
      wrap.style.overflow = 'hidden';
      wrap.style.textAlign = 'center';
      img.style.position = 'relative';

      //Listener
      wrap.addEventListener('mousemove', function(event) {

        if(event.target.tagName === 'IMG') {
          var img = event.target;

          var sizeImg = {
            width: img.clientWidth,
            height: img.clientHeight
          };

          var wrap = event.target.parentNode;

          var sizeWrap = {
            width: wrap.clientWidth,
            height: wrap.clientHeight
          };

          var kX = 100 - (sizeWrap.width/sizeImg.width* 100);
          var shift_right = (event.offsetX / sizeWrap.width*kX);
          event.target.style.right = shift_right+'%';

          var kY = 100 - (sizeWrap.height/sizeImg.height* 100);
          var shift_bottom = (event.offsetY / sizeWrap.height*kY);
          event.target.style.bottom = shift_bottom+'%';

          /*var k_width = (sizeImg.width-sizeWrap.width)/sizeWrap.width;
          var k_height = (sizeImg.height-sizeWrap.height)/sizeWrap.height;

          var shift_right = event.offsetX*k_width;
          var shift_bottom = event.offsetY*k_height;

          if(shift_right <= sizeImg.width-sizeWrap.width) {
            event.target.style.right = shift_right+'px';
          }

          if(shift_bottom <= sizeImg.height-sizeWrap.height) {
            event.target.style.bottom = shift_bottom+'px';
          }*/

        }
      });
    }
  });
})();
