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
