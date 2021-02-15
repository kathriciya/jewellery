'use strict';

(function () {
  // var faqList = document.querySelector('faq__list');

  // if (faqList) {
  //   faqList.classList.remove('faq__list--nojs');

  //   var toggleFaqItem = function (item) {
  //     item.classList.toggle('faq__item--show');
  //   };

  //   faqList.addEventListener('click', function (evt) {
  //     var faqItem = evt.target.closest('li');
  //     toggleFaqItem(faqItem);
  //   });
  // }

  var faqList = document.querySelector('faq__list');
  var faqToggle = document.querySelectorAll('.faq__item > button');

  if (faqList && faqToggle) {

    faqList.classList.remove('faq__list--nojs');

    for (var i = 0; i < faqToggle.length; i++) {
      faqToggle[i].addEventListener('click', function (evt) {
        evt.target.parentNode.classList.toggle('faq__item--show');
      });
    }
  }

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
