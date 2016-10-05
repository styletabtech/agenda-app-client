'use strict';

const app = require('../app');



// get all lists

const getAllLists = () => {
  return $.ajax({
    url: app.host + '/lists',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
};

// show a list

const getOneList = (data) => {
console.log('one list data is', data);
return $.ajax ({
    url: app.host + '/lists/' + $('.list-name-wrapper').data('id'),
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};

// create new list

const createNewList = (data) => {
  console.log('new list data is', data);
  return $.ajax({
    url: app.host + '/lists',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: {
      list: {
        'title': data.list.title
      }
    }
  });
};

// edit a list title

const updateListTitle = (data) => {
  console.log('update ajax data', data);
  return $.ajax({
    url: app.host + '/lists/' + $('.list-name-wrapper').data('id'),
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: {
      list: {
        'title': data.list.title
      }
    }
  });
  };


// delete a list

const destroyList = (listID) => {
return $.ajax ({
    url: app.host + '/lists/' + listID,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
  });
};



module.exports = {
  getAllLists,
  getOneList,
  createNewList,
  updateListTitle,
  destroyList
};
