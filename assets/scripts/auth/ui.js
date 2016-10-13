'use strict';

const app = require('../app');
const listUi = require('../list/ui');

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
  $('.homepage').addClass('hide');

};

// login

const loginSuccess = (data) => {
  // console.log('user is', data);
  app.user = data.user;
  $('.login-wrapper').addClass('hide');
  $('.homepage').addClass('hide');
  $('.main-interface').removeClass('hide');
  $('.full-interface').show();
};

// change password

const proceedToChangePw = () => {
  $('#change-pw').removeClass('hide');

};

const changePasswordSuccess = () => {
  $('#changePwModal').modal('hide');
};

const failMessage = () => {
  $('.pw-fail').removeClass('hide');
  setTimeout(function() {
   $('.pw-fail').fadeOut();
 }, 1000);
};

// sign out

const signOutSuccess = () => {
  app.user = null;
  listUi.clearMyLists();
  $('.main-interface').addClass('hide');
  $('.homepage').removeClass('hide');
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
  failMessage,
  signOutSuccess,
};
