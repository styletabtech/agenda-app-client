'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

// for setup

const getStarted = function (event) {
  event.preventDefault();
    ui.proceedToLogin(event);
};

const getSignedUp = function () {
  event.preventDefault();
    ui.proceedToSignUp(event);
};

// sign up

const onSignUp = function (event) {
  // console.log('ongSignUp is running');
  event.preventDefault();
  let signUpdata = getFormFields(event.target);
    api.signUp(signUpdata)
      .done(function(data, textStatus, jqXHR) {
        api.autoLogIn(data, textStatus, jqXHR, signUpdata)
      .done(ui.signUpSuccess)
      .fail(ui.failure);
    })
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

const getChangePassword = function (event) {
  event.preventDefault();
    ui.proceedToChangePw(event);
};

const onChangePassword = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
//  console.log('data in events is', data);
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

  //for setup

  $('.login-button').on('click', getStarted);
  $('.signup-button').on('click', getSignedUp);
  $('#sign-up').on('submit', onSignUp);

// sign in

 $('#login').on('submit', onLogIn);

// //change pw

$('#change-pw-nav').on('click', function () {
  $('#changePwModal').modal('show');
});
$('#change-pw').on('submit', onChangePassword);

$('#change-pw').on('submit', function(){
  $('#changePwModal').modal('hide');

  });


  // $('#change-pw-nav').on('click', getChangePassword);
  // $('#change-pw').on('submit', onChangePassword);

// // sign out
$('#sign-out-nav').on('click', onSignOut);

$(document).on('ready', function(){
  $('.intro-wrapper').show();

});

};


module.exports = {
  addHandlers,
  getStarted,
  getSignedUp,
  onSignUp,
  onLogIn,
  getChangePassword,
  onChangePassword,
  onSignOut
};
