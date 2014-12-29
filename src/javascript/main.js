var $    = require('jquery');
var Todo = require('./todo.js');

console.log(Todo);

var LIST_HEIGHT = 111;
var normal_status = true;


$('.list').not('.add-form').each(function(k, v) {
    var index = $(this).index();
    $(this).css('top', index * LIST_HEIGHT);
}).on('click', function() {
    if(normal_status) {
        $(this).toggleClass('current');
    } 
});

$('#add').on('click', function() {
    normal_status = false;
    $('.add-form').show();
})

$('#add-submit').on('click', function() {
    normal_status = true;
    $('.add-form').hide();
    var score = $('#demo_score').val();
    var name = $('#demo_name').val();

    addItem(name, score)
})

function addItem(name, score) {
    var score = parseInt(score, 10) || 0;

    if(score > 100) {
        alert('你有病吧！');
        return;
    }

    new Todo({
        name: name,
        score: score
    });
}