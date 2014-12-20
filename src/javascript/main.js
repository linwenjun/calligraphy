var $        = require('jquery');
var Todo     = require('./todo.js');

theTodo = new Todo();
var currentId;
var $todo = $('#todo');
var LIST_HEIGHT = 111;


$('.list').each(function(k, v) {
    var index = $(this).index();
    $(this).css('top', index * LIST_HEIGHT);
}).on('click', function() {
    $(this).toggleClass('current');
})

$('#add').on('click', function() {
    alert("abcd");
})