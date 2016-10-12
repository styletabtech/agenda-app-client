'use strict';
//
// const showAllListsTemplate = require('../templates/get-all-lists.handlebars');
// const showNewListTemplate = require ('../templates/get-new-list.handlebars');
 const showNewItemTemplate = require ('../templates/single-list-view.handlebars');



const proceedToItemForm = () => {
  $('#new-item-form').removeClass('hide');
};

const newItemSuccess = (data) => {
  let item = data;
    console.log('item is', data);
   $('#new-item-form').addClass('hide');
  $(".content").append(showNewItemTemplate(item));
};


module.exports = {
  proceedToItemForm,
  newItemSuccess

};
