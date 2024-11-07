const generateArray = (length, max) => (
    [...new Array(length)]
      .map(() => Math.round(Math.random() * max))
);

const grades = generateArray(12, 100);
let GPA = 0;
grades.map((item) => GPA += item);
GPA = GPA / 12;

grades.sort(function(a, b) {
    return a - b;
});

const positiveGrades = grades.filter(function(item) {
    if (item >= 60) {
        return item;
    };
});
const negativeGrades = grades.filter(function(item) {
    if (item <= 60) {
        return item;
    };
});

const newGrades = grades.map(function(item) {
    if (item >=80) {
        return item = 'A';
    } else if (item >= 60 && item < 80) {
        return item = 'B';
    } else if (item >= 40 && item < 60) {
        return item = 'C';
    } else if (item >=20 && item < 40) {
        return item = 'D';
    } else {
        return item = 'E';
    };
});

let a = document.getElementById('grades');
a.innerText= `Оценки студентов: ${grades}`;
let b = document.getElementById('gpa');
b.innerText = 'Средний балл студентов: ' + GPA;
let c = document.getElementById('maxGr');
c.innerText = 'Максимальный балл студента: '+ grades[11];
let d = document.getElementById('minGr');
d.innerText = 'Минимальный балл студента: '+ grades[0];
let e = document.getElementById('positive');
e.innerText = "Количество положительных оценок: " + positiveGrades.length;
let k = document.getElementById('negative');
k.innerText = "Количество отрицательных оценок: " + negativeGrades.length;
let n = document.getElementById('newGrades');
n.innerText = `Оценки студентов по шкале: ${newGrades}`