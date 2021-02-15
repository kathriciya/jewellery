'use strict';

(function () {
  // var list = document.querySelector('faq__list');

  // if (list) {
  //   list.classList.remove('faq__list--nojs');

  //   var toggle = function (item) {
  //     item.classList.toggle('faq__item--show');
  //   };

  //   list.addEventListener('click', function (evt) {
  //     var item = evt.target.closest('li');
  //     toggle(item);
  //   });
  // }

})();

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
