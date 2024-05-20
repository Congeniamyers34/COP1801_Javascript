// Step 1: Ask the user for their first name and store it in the variable Fname
let Fname = prompt("Please enter your first name:");

// Step 2: Display a welcome message that contains the name they entered
alert(`Welcome, ${Fname}!`);

// Step 3: Create the constant piValue to store the value of Pi to 7 significant digits
const piValue = 3.1415926;

// Step 4: Ask the user to input their favorite number and store the value in a variable myFavNum
let myFavNum = parseFloat(prompt("Please enter your favorite number:"));

// Step 5: Calculate the area of a circle using the user's favorite number as the radius
let myArea = piValue * Math.pow(myFavNum, 2);

// Step 6: Display the contents of each variable in a message
let message = `Hello ${Fname}, you entered ${myFavNum} as your favorite number. ` +
              `If that was the radius of a circle, the circle's area would be ${myArea.toFixed(2)}.`;

// Display the message in an alert box
alert(message);

// Display the message on the webpage(optional)
document.getElementById('message').innerText = message;