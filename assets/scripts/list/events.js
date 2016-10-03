'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

// for getting all lists

const getMyLists = function () {
  event.preventDefault();
    api.getAllLists()
      .done(ui.myListsSuccess)
      .fail(ui.failure);
};

// for creating a new list

const getNewList = function (event) {
  event.preventDefault();
  ui.proceedToCreateList(event);
};

const onNewList = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
    api.createNewList(data)
      .done(ui.newListSuccess)
      .fail(ui.failure);
};

// for updating a list title

// const onUpdateList = function (event) {
//   event.preventDefault();
//   let updateListID = $('.edit-list').attr('id');
//     api.updateListTitle(updateListID)
//       .done(ui.updateListSuccess)
//       .fail(ui.failure);
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

  //for creating a new list

  $('#new-list-button').on('click', getNewList);
  $('#new-list-form').on('submit', onNewList);

  // for updating a list title
//  $('.content').on('click', onUpdateList);

  // deleting a list
  $('.content').on('click', onDeleteList);

};

module.exports = {
  addHandlers,
  getMyLists,
  getNewList,
  onNewList,
  //onUpdateList,
  onDeleteList

};
