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

(function () {
  var OUT = 27;
  var button = document.querySelector('.header__header-login .header-login');
  var login = document.querySelector('.login');
  var closeLogin = document.querySelector('.login__close');
  var inputEmail = document.querySelector('#login-email');

  function setShowLoginHandler() {
    button.addEventListener('click', function () {
      login.classList.add('modal--show');
      document.body.style.overflow = 'hidden';
      login.value = localStorage.getItem('inputEmail');
      inputEmail.focus();
    });
  }

  setShowLoginHandler();

  function setRemoveLoginHandler() {
    closeLogin.addEventListener('click', function () {
      login.classList.remove('modal--show');
      document.body.style.overflow = '';
    });
  }

  setRemoveLoginHandler();

  function setKeyPressRemoveLoginHandler(evt) {
    if (evt.keyCode === OUT) {
      login.classList.remove('modal--show');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemoveLoginHandler);

  popup.addEventListener('click', function (evt) {
    var wrap = document.querySelector('.login__wrap');
    if (!wrap.contains(evt.target)) {
      login.classList.remove('modal--show');
    }
  });

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
