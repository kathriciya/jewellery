'use strict';

(function () {
  var OUT = 27;
  var openCart = document.querySelector('.product__button');
  var cart = document.querySelector('.modal--cart');
  var closeCart = document.querySelector('.cart__close');

  if (openCart && cart) {
    openCart.addEventListener('click', function (evt) {
      evt.preventDefault();
      cart.classList.add('modal--show');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeCart) {
    closeCart.addEventListener('click', function () {
      cart.classList.remove('modal--show');
      document.body.style.overflow = '';
    });
  }

  function setKeyPressRemoveCartHandler(evt) {
    if (evt.keyCode === OUT) {
      cart.classList.remove('modal--show');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemoveCartHandler);

  if (cart) {
    cart.addEventListener('click', function (evt) {
      var wrap = document.querySelector('.cart__wrap');
      if (!wrap.contains(evt.target)) {
        cart.classList.remove('modal--show');
      }
    });
  }

})();

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

  if (openFilter && filter) {
    openFiter.addEventListener('click', function (evt) {
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
      var wrap = document.querySelector('.filter');
      if (!wrap.contains(evt.target)) {
        filter.classList.remove('modal--show');
      }
    });
  }

})();

'use strict';

(function () {
  var OUT = 27;
  var openLogin = document.querySelector('.header-login');
  var login = document.querySelector('.modal--login');
  var closeLogin = document.querySelector('.login__close');
  var inputEmail = document.querySelector('#login-email');
  // var email = '';

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
