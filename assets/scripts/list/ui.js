'use strict';

const app = require('../app');



const proceedToCreateList = () => {
  $('#new-list-form').removeClass('hide');
};


// const proceedToLogin = () => {
//   $('.intro-wrapper').addClass('hide');
//   $('.login-wrapper').removeClass('hide');
// };


module.exports = {
  proceedToCreateList,
};
