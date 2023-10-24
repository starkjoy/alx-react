// js/dashboard_main.js
import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

// Initialize a count variable
let count = 0;

function updateCounter() {
  // Increment the count and update the text of the 'count' element
  count++;
  $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
  // Create and append elements
  const body = $('body');

  body.append($('<p>').text('Holberton Dashboard'));
  body.append($('<p>').text('Dashboard data for the students'));
  const button = $('<button>').text('Click here to get started');
  body.append(button);
  body.append($('<p id="count"></p>'));
  body.append($('<p>').text('Copyright - Holberton School'));

  // Bind the debounce function from Lodash to the click event of the button
  button.click(_.debounce(updateCounter, 1000));
});
