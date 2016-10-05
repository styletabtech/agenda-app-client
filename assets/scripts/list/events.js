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

// for showing a single list

const getAList = function (data) {
  event.preventDefault();
    api.getOneList(data)
      .done(ui.showUpdatedList)
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

const getUpdateList = function (event) {
  console.log('getupdatelist is running');
  event.preventDefault();
  ui.proceedToUpdateList(event);
};

const onUpdateList = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  console.log('updateList data', data);
    api.updateListTitle(data)
        .done(getAList(data))
        .fail(ui.failure);
};

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

  $('#edit-content').on('click', '.edit-list', getUpdateList);
 $('#update-list-form').on('submit', onUpdateList);

  // deleting a list
  $('#edit-content').on('click', '.delete-list', onDeleteList);

};

module.exports = {
  addHandlers,
  getMyLists,
  getAList,
  getNewList,
  onNewList,
  getUpdateList,
  onUpdateList,
  onDeleteList

};
