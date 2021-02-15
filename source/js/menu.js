'use strict';

// мобильное меню - начиная с планшетной версии

(function () {
  var header = document.querySelector('.header');
  var toggle = document.querySelector('.header__toggle');

  if (header && toggle) {
    header.classList.remove('header--nojs');

    toggle.addEventListener('click', function () {
      if (header.classList.contains('header--closed')) {
        header.classList.remove('header--closed');
        header.classList.add('header--opened');
      } else {
        header.classList.add('header--closed');
        header.classList.remove('header--opened');
      }
    });
  }

})();
