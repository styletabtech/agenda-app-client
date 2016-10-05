'use strict';

const app = require('../app');


// create new item

const createNewItem = (data) => {
  // console.log('new item data is', data);
  return $.ajax({
    url: app.host + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
        },
    data: {
      item: {
        'name': data.item.name,
        'due_date': data.item.due_date,
        'priority': data.item.priority,
        'list_id': data.item.list_id,
        'due_time': data.item.due_time
      }
    }
  });
};

// edit a list title

// const updateItem = (data) => {
//   console.log('update ajax data', data);
//   return $.ajax({
//     url: app.host + '/lists/' + $('.list-name-wrapper').data('id'),
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//         },
//     data: {
//       list: {
//         'title': data.list.title
//       }
//     }
//   });
//   };
//
//
// // delete a list
//
// const destroyItem = (listID) => {
// return $.ajax ({
//     url: app.host + '/lists/' + listID,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//   });
// };


module.exports = {
  createNewItem
};
