'use strict';

(function () {
  var listFaq = document.querySelector('.faq__list');

  if (listFaq) {
    listFaq.classList.remove('faq__list--nojs');

    var toggle = function (item) {
      item.classList.toggle('faq__item--show');
    };

    listFaq.addEventListener('click', function (evt) {
      var item = evt.target.closest('li');
      toggle(item);
    });
  }

})();
