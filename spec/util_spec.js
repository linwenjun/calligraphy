var util = require('../src/javascript/util.js');

describe('hello', function(){
    it('should say hello', function(){
        expect(util.getGrade(91)).toBe('A');
        expect(util.getGrade(90)).toBe('A');
        expect(util.getGrade(81)).toBe('B');
        expect(util.getGrade(59)).toBe('E');
    });
});