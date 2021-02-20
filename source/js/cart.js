'use strict';

(function () {
  var OUT = 27;
  var openCart = document.querySelector('.product__button');
  var cart = document.querySelector('.modal--cart');
  var closeCart = document.querySelector('.cart__close');

  if (openCart && cart) {
    openCart.addEventListener('click', function (evt) {
      evt.preventDefault();
      cart.classList.add('modal--show-cart');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeCart) {
    closeCart.addEventListener('click', function () {
      cart.classList.remove('modal--show-cart');
      document.body.style.overflow = '';
    });
  }

  function setKeyPressRemoveCartHandler(evt) {
    if (evt.keyCode === OUT) {
      cart.classList.remove('modal--show-cart');
      document.body.style.overflow = '';
    }
  }

  document.addEventListener('keydown', setKeyPressRemoveCartHandler);

  if (cart) {
    cart.addEventListener('click', function (evt) {
      var wrap = document.querySelector('.cart__wrap');
      if (!wrap.contains(evt.target)) {
        cart.classList.remove('modal--show-cart');
      }
    });
  }

})();
