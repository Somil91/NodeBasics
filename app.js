console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const _  = require('lodash');
const notes = require('./notes.js');

var filteredArray = _.uniq([1, 3 , 4, 5, 4, 4]);
console.log(filteredArray);
// console.log(_.isString('Somil'));

// let user = os.userInfo();
// console.log('User Details', user);

// fs.appendFile('greetings.txt', `Hello  ${user.username}! You are ${notes.age} `);