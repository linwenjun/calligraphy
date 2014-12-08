function getGrade(score) {
    if(score >= 90) {
        return "A";
    } else if(score >= 80) {
        return "B";
    }

    return 'E';
}

module.exports = {
    'getGrade': getGrade
};