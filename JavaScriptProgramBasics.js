// Task 1
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`Count ${i} is even`);
  } else {
    console.log(`Count ${i} is odd`);
  }
}

// Task 2
let myNum;
do {
  myNum = parseInt(prompt("Enter a number between 5 and 20:"));
} while (isNaN(myNum) || myNum < 5 || myNum > 20);

for (let i = 1; i <= myNum; i++) {
  console.log(i);
}

// Task 3
const subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

// Display the array values using foreach()
subjects.forEach((subject) => console.log(subject));

// Display the array values separated by commas using one statement
console.log(subjects.join(", "));