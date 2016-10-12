'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');
const app = require('../app');

// for getting all lists

const getMyLists = function () {
  event.preventDefault();
    api.getAllLists()
      .done(ui.myListsSuccess)
      .fail(ui.failure);
};

// for showing a single list

const getAList = function (event) {
  event.preventDefault();
  let singleListId = $(event.target).parent().data('id');
  console.log('singlelistid is', singleListId);
  app.singleListId = singleListId;
    api.getOneList(singleListId)
      .done(ui.singleListSuccess)
      .fail(ui.failure);
};

// for creating a new list

const getNewList = function (event) {
//  console.log('getnewlist is running');
  event.preventDefault();
  ui.proceedToCreateList(event);
};

const onNewList = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
    api.createNewList(data)
      .done(ui.clearMyLists)
        .done(getMyLists)
      .fail(ui.failure);
};

// for creating a new list (in my list view)

// const onNewListAllView = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//     api.createNewList(data)
//       .done(ui.newListSuccess)
//       .done(ui.clearMyLists)
//         .done(getMyLists)
//       .fail(ui.failure);
// };

// for updating a list title

// const getUpdateList = function (event) {
// //  console.log('getupdatelist is running');
//   event.preventDefault();
//   ui.proceedToUpdateList(event);
// };

// for updating a list title in My Lists View

const clickEditOnList = function (event) {
  event.preventDefault();
  let updateListId = $(event.target).parent().data('id');
  console.log('targeted list id is', updateListId);
  app.editListId = updateListId;
  // let value = $("#listIdUpdateTitle").val(updateListId);
  // console.log('value is', value);

  // let list_id = $(event.target).attr('id');
  // console.log('listID is', list_id);
    ui.proceedToUpdateList(updateListId);

};

const onUpdateListAllView = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log('updateList data', data);
    api.updateListTitle(data)
      .done(ui.clearMyLists)
        .done(getMyLists)
        .fail(ui.failure);
};

// for updating a list title in New List view

// const onUpdateList = function (event) {
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   console.log('updateList data', data);
//     api.updateListTitle(data)
//         .done(getAList(data))
//         .fail(ui.failure);
// };

// for deleting a given list

const onDeleteList = function (event) {
  event.preventDefault();
  let listID = $(event.target).attr('id');
  console.log('listID is', listID);
  api.destroyList(listID)
    .done(ui.clearMyLists)
      .done(getMyLists)
      .fail(ui.failure);
};

// events

const addHandlers = () => {

  // for getting all lists
  $('#my-lists-button').on('click', getMyLists);

  // for getting a single list
  $('#edit-content').on('click', '.view-single-list', getAList);

  //for creating a new list

  $('#new-list-button').on('click', function () {
    $('#newListModal').modal('show');
  });
  $('#new-list-form').on('submit', onNewList);

  $('#new-list-form').on('submit', function(){
    $('#newListModal').modal('hide');

    });

 // for editing a list title (My Lists list view)

 // $('#edit-content').on('click', '.edit-list-all-view', clickEditOnList);



 $('#edit-content').on('click', '.edit-list-all-view', function () {
  $('#editTitleModal').modal('show');
});

 $('#edit-content').on('click', '.edit-list-all-view', clickEditOnList);

 $('#update-list-form').on('submit', onUpdateListAllView);

 $('#update-list-form').on('submit', function(){
   $('#editTitleModal').modal('hide');

   });

  // deleting a list
  $('#edit-content').on('click', '.delete-list', onDeleteList);

};

// for editing a list title (single list view)

//  $('#edit-content').on('click', '.edit-list', getUpdateList);
// $('#update-list-form').on('submit', onUpdateList);

//  $('#edit-content').on('click', '.edit-list-all-view', getUpdateList);
// $('#update-list-form').on('submit', onUpdateListAllView);

module.exports = {
  addHandlers,
  getMyLists,
  getAList,
  getNewList,
  onNewList,
  clickEditOnList,
  // onUpdateList,
  onUpdateListAllView,
  onDeleteList

};
