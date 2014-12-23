var $        = require("jquery");
var Backbone = require("backbone");
var _        = require('underscore');
var util     = require('./util.js');

Backbone.$ = $;

var LIST_HEIGHT = 111;

var TodoView = Backbone.View.extend({
    tagName: 'li',

    className: 'list',

    template: _.template($('#todo_template').html()),

    appended: false,

    initialize: function() {
        this.listenTo(this.model, 'change:status', this.onStatusChange);
        this.onStatusChange(this.model.get('status'));
    },

    onStatusChange: function(newVal) {
        this.$el.html(this.template(this.model.attributes))
        $('#todo').prepend(this.$el);

        $('.list').not('.add-form').each(function(k, v) {
            var index = $(this).index();
            $(this).css('top', index * LIST_HEIGHT);
        })
    }
})

var Todo = Backbone.Model.extend({
    defaults: {
        'grade': ''
    },

    initialize: function() {
        var grade = util.getGrade(this.get('score'));
        this.set('grade', grade);
        new TodoView({model: this});
    }
})

module.exports = Todo;