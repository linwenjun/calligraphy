var TodoView = require('../src/javascript/todo.js');

describe('todo_view', function(){
    it('should be a class', function(){
        var todoV = new TodoView;
        expect(todoV.get('status')).toBe('view');
    });
});
