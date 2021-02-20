'use strict';

(function () {
  var OUT = 27;
  var openFilter = document.querySelector('.catalog__filter-btn');
  var filter = document.querySelector('.modal--filter');
  var closeFilter = document.querySelector('.filter__close');
  var filterButtons = document.querySelectorAll('.filter__group');
  var filterForm = document.querySelector('.filter__form');

  if (filterForm && filterButtons) {

    filterForm.classList.remove('filter__form--nojs');

    for (var i = 0; i < filterButtons.length; i++) {
      filterButtons[i].addEventListener('click', function (evt) {
        evt.target.parentNode.classList.toggle('filter__item--open');
      });
    }
  }

  if (openFilter) {
    openFilter.addEventListener('click', function (evt) {
      evt.preventDefault();
      filter.classList.add('modal--show');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeFilter) {
    closeFilter.addEventListener('click', function () {
      filter.classList.remove('modal--show');
      document.body.style.overflow = '';
    });
  }

  function setKeyPressRemoveFilterHandler(evt) {
    if (evt.keyCode === OUT) {
      filter.classList.remove('modal--show');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemoveFilterHandler);

  if (filter) {
    filter.addEventListener('click', function (evt) {
      var wrap = document.querySelector('.filter__form');
      if (!wrap.contains(evt.target)) {
        filter.classList.remove('modal--show');
      }
    });
  }

})();
