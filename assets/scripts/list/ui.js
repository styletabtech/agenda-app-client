'use strict';

const app = require('../app');



const proceedToCreateList = () => {
  $('#new-list-form').removeClass('hide');
};


const newListSuccess = (data) => {
  console.log('new list success');
  app.user = data.user;
  $('#new-list-form').addClass('hide');
};

const failure = () => {
  $('.pw-error').removeClass('hide');
  setTimeout(function() {
   $('.pw-error').fadeOut();
 }, 800);
};


// const proceedToLogin = () => {
//   $('.intro-wrapper').addClass('hide');
//   $('.login-wrapper').removeClass('hide');
// };


module.exports = {
  proceedToCreateList,
  newListSuccess,
  failure
};
