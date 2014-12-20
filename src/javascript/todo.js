var $        = require("jquery");
var Backbone = require("backbone");
var util     = require('./util.js');

Backbone.$ = $;

var TodoView = Backbone.View.extend({
    tagName: 'li',

    className: 'list',

    appended: false,

    initialize: function() {
        this.listenTo(this.model, 'change:status', this.onStatusChange);
        this.onStatusChange(this.model.get('status'));
    },

    onStatusChange: function(newVal) {
        this.$el.html(newVal);

        if(!this.appended) {
            console.log(this.$el);
            $('body').append(this.$el);
            this.appended = true;
        }
    }
})

var Todo = Backbone.Model.extend({
    defaults: {
        'status': 'view'
    },

    initialize: function() {
        new TodoView({model: this});
    }
})

module.exports = Todo;