'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

// sign up

const onSignUp = function (event) {
  // console.log('ongSignUp is running');
  event.preventDefault();
  let data = getFormFields(event.target);
    api.signUp(data)
      .done(ui.success)
      .fail(ui.failure);

};

// // login

const onLogIn = function (event) {

  event.preventDefault();
  let data = getFormFields(event.target);
//  console.log('data is', data);
  api.logIn(data)
  .done(ui.loginSuccess)
  .fail(ui.failure);
};

// // change password

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log('data in events is', data);
  api.changePassword(data)
  .done(ui.changePasswordSuccess)
  .fail(ui.failure);
};

// //sign out

const onSignOut =  function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};


// events

const addHandlers = () => {
  //sign up
// $('#sign-up-nav').on('click', function () {
//   $('#signUpModal').show('show');
// });
$('#sign-up').on('submit', onSignUp);

// $('#sign-up').on('submit', function(){
//   $('#signUpModal').modal('hide');

// });

// sign in
// $('#sign-in-nav').on('click', function () {
//   $('#signInModal').modal('show');
// });
 $('#login').on('submit', onLogIn);
//
// $('#sign-in').on('submit', function(){
//   $('#signInModal').modal('hide');
// });
//
// //change pw
// $('#change-pw-nav').on('click', function () {
//   $('#changePwModal').modal('show');
// });
 $('#change-pw').on('submit', onChangePassword);
//
// $('#change-pw').on('submit', function(){
//   $('#changePwModal').modal('hide');
// });
//
// // sign out
$('#sign-out-nav').on('click', onSignOut);
//
// $(document).on('ready', function(){
//   // $('.board-page').hide();
// //  $('.board').hide();
//   // $('.welcome-page').show();
//   $('#sign-up-nav').show();
//   $('#sign-in-nav').show();

// });
//
};

module.exports = {
  addHandlers,
  onSignUp,
  onLogIn,
  onChangePassword,
  onSignOut
};
