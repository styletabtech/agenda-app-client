'use strict';

const app = require('../app');

// for setup

const proceedToLogin = () => {
  $('.intro-wrapper').addClass('hide');
  $('.login-wrapper').removeClass('hide');
};

const proceedToSignUp = () => {
  $('.login-wrapper').addClass('hide');
  $('.sign-up-wrapper').removeClass('hide');
};

// sign up

const signUpSuccess = (data) => {
  app.user = data.user;
  $('.sign-up-wrapper').addClass('hide');
  $('.main-interface').removeClass('hide');

};

// login

const loginSuccess = (data) => {

  app.user = data.user;
  $('.login-wrapper').addClass('hide');
  $('.main-interface').removeClass('hide');
};

// change password

const proceedToChangePw = () => {
  $('#change-pw').removeClass('hide');
  $('.items').addClass('hide');

};

const changePasswordSuccess = () => {
//  console.log('change PW data is', data);

//  app.user = data.user;
    $('.items').removeClass('hide');
    $('#change-pw').addClass('hide');
    $('.pw-success').removeClass('hide');
    setTimeout(function() {
     $('.pw-success').fadeOut();
   }, 800);
};

// sign out

const signOutSuccess = () => {

  app.user = null;
  $('.main-interface').addClass('hide');
  $('.intro-wrapper').removeClass('hide');
};

// for all fails

const failure = () => {
  $('.pw-error').removeClass('hide');
  setTimeout(function() {
   $('.pw-error').fadeOut();
 }, 800);
};


module.exports = {
  proceedToLogin,
  proceedToSignUp,
  loginSuccess,
  failure,
  signUpSuccess,
  proceedToChangePw,
  changePasswordSuccess,
  signOutSuccess,
};
