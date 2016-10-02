'use strict';

const app = require('../app');



// edit a list title (patch)
// delete a lsit (delete)


// get all lists

const getAllLists = () => {
  return $.ajax({
    url: app.host + '/lists',
    method: "GET",
    headers: {
      Authorization: 'Token token=' + app.user.token,
  }});
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
//
// const autoLogIn = function (data, textStatus, jqXHR, signUpData) {
//   return $.ajax({
//     url: app.host + '/sign-in',
//     method: 'POST',
//     data: signUpData
//   });
// };
//
// const logIn = (data) => {
//   return $.ajax({
//     url: app.host + '/sign-in',
//     method: 'POST',
//     data: data,
//   });
// };
//
// const changePassword = (data) => {
//   return $.ajax({
//     url: app.host + '/change-password/' + app.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
//
// };
//
// const signOut = () => {
//   return $.ajax ({
//     url: app.host + '/sign-out/' + app.user.id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };
//
// const getTotalGames = () => {
//   return $.ajax({
//     url: app.host + '/games',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };
//
//
// const newGame = () => {
//    return $.ajax({
//     url: app.host + '/games',
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };
//
//  const updateGame = function(index, value, game) {
//   return $.ajax({
//     method: 'PATCH',
//     url: app.host + '/games/'+ app.game.id,
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: {
//      "game": {
//        "cell": {
//          "index": index,
//          "value": value,
//        },
//        "over": game,
//      }
//     }
//   });
// };

module.exports = {
  getAllLists,
  createNewList
};
