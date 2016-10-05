'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const itemsApi = require('../list/api');
const ui = require('./ui');
// const itemsUi = require('../list/ui');

const getNewItemForm = function (event) {
//  console.log('getNewItemForm is running');
  event.preventDefault();
    ui.proceedToItemForm(event);
};


const onAddItem = function (event) {
  //console.log('onAddItem is running');
  event.preventDefault();
  let listId = $('.list-name-wrapper').data('id');
  $("#listIdItemAdd").val(listId);
  let data = getFormFields(event.target);
    api.createNewItem(data)
    //  .done(itemsUi.clearMyLists)
      .done(itemsApi.getOneList(data))
        .done(ui.newItemSuccess)
        .fail(ui.failure);

};


const addHandlers = () => {

  // add a new item

  $('#edit-content').on('click', '.add-item', getNewItemForm);
   $('#new-item-form').on('submit', onAddItem);

  // update an item

  // delete an item

};

module.exports = {
  addHandlers,

};
