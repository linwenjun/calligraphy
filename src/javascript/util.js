function getGrade(score) {
    if(score > 90) {
        return "A";
    }

    return 'D';
}

module.exports = {
    'getGrade': getGrade
}