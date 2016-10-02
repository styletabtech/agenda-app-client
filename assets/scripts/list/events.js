'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

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


// events

const addHandlers = () => {

  //for creating a new list

  $('#new-list-button').on('click', getNewList);
  $('#new-list-form').on('submit', onNewList);

};

module.exports = {
  addHandlers,
  getNewList,
  onNewList

};
