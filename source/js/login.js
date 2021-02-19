'use strict';

(function () {
  var OUT = 27;
  var openLogin = document.querySelector('.header-login');
  var login = document.querySelector('.modal--login');
  var closeLogin = document.querySelector('.login__close');
  var inputEmail = document.querySelector('#login-email');

  if (openLogin && login) {
    openLogin.addEventListener('click', function (evt) {
      evt.preventDefault();
      login.classList.add('modal--show');
      document.body.style.overflow = 'hidden';
      localStorage.setItem('email', inputEmail.value);
      inputEmail.focus();
    });
  }

  if (closeLogin) {
    closeLogin.addEventListener('click', function () {
      login.classList.remove('modal--show');
      document.body.style.overflow = '';
    });
  }

  function setKeyPressRemoveLoginHandler(evt) {
    if (evt.keyCode === OUT) {
      login.classList.remove('modal--show');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemoveLoginHandler);

  login.addEventListener('click', function (evt) {
    var wrap = document.querySelector('.login__wrap');
    if (!wrap.contains(evt.target)) {
      login.classList.remove('modal--show');
    }
  });

})();
