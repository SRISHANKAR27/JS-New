let totalMarks = 0;

for (let i = 1; i <= 5; i++) {
  let mark = Number(prompt("Enter marks for subject " + i + ":"));
  totalMarks += mark;
}

let average = totalMarks / 5;
let grade = "";

if (average >= 90) {
  grade = "A";
} else if (average >= 75) {
  grade = "B";
} else if (average >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}

alert("Total Marks: " + totalMarks + "\nAverage Marks: " + average + "\nGrade: " + grade);