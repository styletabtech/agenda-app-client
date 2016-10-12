'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const listApi = require('../list/api');
const ui = require('./ui');
// const listUi = require('../list/ui');
// const listEvents = require('../list/events');

// shows the add item form

const getNewItemForm = function (event) {
//  console.log('getNewItemForm is running');
  event.preventDefault();
    ui.proceedToItemForm(event);
};


// adds an item to a list in the single list view

const onAddItem = function (event) {
  //console.log('onAddItem is running');
  event.preventDefault();
  let listId = $('.list-name-wrapper').data('id');
  $("#listIdItemAdd").val(listId);
  let data = getFormFields(event.target);
    api.createNewItem(data)
    //  .done(itemsUi.clearMyLists)
      .done(listApi.getOneList(data))
        .done(ui.newItemSuccess)
        .fail(ui.failure);

};

// adds an item to a list in the all list view

// const onAddItemAllView = function (event) {
//   //console.log('onAddItem is running');
//   event.preventDefault();
//   let listId = $(event.target).data('id');
//   $("#listIdItemAdd").val(listId);
//   console.log('udpate listId is', listId);
//   let data = getFormFields(event.target);
//     console.log('add item all view is', data);
//     api.createNewItem(data)
//       .done(listUi.clearMyLists)
//       .done(listEvents.getMyLists(data))
//         .done(ui.newItemSuccess)
//         .fail(ui.failure);
//
// };



const addHandlers = () => {

  // add a new item (single view)

  $('#edit-content').on('click', '.add-item', function () {
   $('#addItemModal').modal('show');
 });

  $('#edit-content').on('click', '.add-item', getNewItemForm);
   $('#new-item-form').on('submit', onAddItem);

   $('#new-item-form').on('submit', function(){
     $('#addItemModal').modal('hide');

     });

   // add a new item (all list view)

  //  $('#edit-content').on('click', '.add-item-all-view', getNewItemForm);
  //   $('#new-item-form').on('submit', onAddItemAllView);


  // update an item

  // delete an item

};

module.exports = {
  addHandlers,

};
