var util = require('../src/javascript/util.js');

describe('hello', function() {
    it('should say hello', function(){
        expect(util.getGrade(91)).toBe('A');
        expect(util.getGrade(90)).toBe('A');
        expect(util.getGrade(81)).toBe('B');
        expect(util.getGrade(79)).toBe('C');
        expect(util.getGrade(69)).toBe('D');
        expect(util.getGrade(59.9)).toBe('E');
        expect(util.getGrade(49)).toBe('F');
        expect(util.getGrade(39)).toBe('G');
        expect(util.getGrade(30)).toBe('G');
        expect(util.getGrade(29)).toBe('H');
    });
});