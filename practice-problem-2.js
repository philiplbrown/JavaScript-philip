var mathematics = 75.25;
var biology = 65;
var chemiesty = 80;
var physics = 35.45;
var bangla = 99.50;
var totalSubjects = 5;
var totalMarks = mathematics + biology + chemiesty + physics + bangla;
var average = totalMarks / totalSubjects;
average = average.toFixed(2)
average = parseFloat(average)
console.log(average);