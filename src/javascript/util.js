function getGrade(score) {
    var GradeMap = [
        {grade: 'A', minScore: 90},
        {grade: 'B', minScore: 80},
        {grade: 'C', minScore: 70},
        {grade: 'D', minScore: 60},
        {grade: 'E', minScore: 50},
        {grade: 'F', minScore: 40},
        {grade: 'G', minScore: 30},
        {grade: 'H', minScore: 20},
        {grade: 'I', minScore: 10},
        {grade: 'J', minScore: 0},
    ]

    var len = GradeMap.length;
    var result = 'Err';

    for(; len--; ) {
        item = GradeMap[len];
        if(score >= item.minScore) {
            result = item.grade;
            continue;
        }
        break;
    }

    return result;
}

module.exports = {
    'getGrade': getGrade
};