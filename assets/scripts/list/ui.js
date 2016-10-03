'use strict';

const app = require('../app');
const showAllListsTemplate = require('../templates/get-all-lists.handlebars');

// for getting all lists

const myListsSuccess = (data) => {
  console.log('list success data is', data);
  let lists = data;
  // console.log(data);
  $(".content").html(showAllListsTemplate(lists));
};

// for creating a list

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
  myListsSuccess,
  newListSuccess,
  failure
};
