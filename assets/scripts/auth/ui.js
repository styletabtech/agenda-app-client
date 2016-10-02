'use strict';

const app = require('../app');

// sign up

const success = (data) => {
  console.log('sign up success');
  app.user = data.user;

};

// login

const loginSuccess = (data) => {
  console.log('login data is', data);
  console.log('login success');
  app.user = data.user;

  // $('.board').hide();
  // $('.win-msg-x').hide();
  // $('.win-msg-o').hide();
  // $('.draw-msg').hide();
  // $('.total-games-msg').hide();
  // $('.welcome-page').addClass('hide');
  // $('.board-page').removeClass('hide');
};

// change password

const changePasswordSuccess = () => {
//  console.log('change PW data is', data);
  console.log('change password success');
//  app.user = data.user;

};

// sign out

const signOutSuccess = () => {
  console.log('sign out success');
  app.user = null;
  // $('#sign-up-nav').show();
  // $('#sign-in-nav').show();
  // $('.welcome-page').removeClass('hide');
  // $('.board-page').addClass('hide');

};

// for all fails

const failure = (error) => {
  console.log(error);
};


module.exports = {
  loginSuccess,
  failure,
  success,
  changePasswordSuccess,
  signOutSuccess,
};
