// Import the console color module
const color = require("colors");

// Import the crypto module for generating random numbers
const crypto = require("crypto");

// Retrieve command line arguments
const args = process.argv.slice(2);

// Check if there are enough arguments provided
if (args.length === 0) {
  console.log("Please provide an operation.");
  process.exit(1);
}

// Extract the operation and the remaining arguments
const [operation, ...numbers] = args;

// Convert arguments to numbers
const numArgs = numbers.map(Number);

// Function to validate if arguments are numbers
const areValidNumbers = (args) => args.every((arg) => !isNaN(arg));

// Main calculator function
const calculate = (operation, numArgs) => {
  switch (operation) {
    case "add":
      if (areValidNumbers(numArgs)) {
        const sum = numArgs.reduce((acc, val) => acc + val, 0);
        console.log(`Result: ${sum}`.green);
      } else {
        console.log("Invalid numbers provided for addition.".red);
      }
      break;

    case "sub":
      if (areValidNumbers(numArgs) && numArgs.length === 2) {
        const difference = numArgs[0] - numArgs[1];
        console.log(`Result: ${difference}`.green);
      } else {
        console.log("Provide exactly 2 valid numbers for subtraction.".red);
      }
      break;

    case "mult":
      if (areValidNumbers(numArgs)) {
        const product = numArgs.reduce((acc, val) => acc * val, 1);
        console.log(`Result: ${product}`.green);
      } else {
        console.log("Invalid numbers provided for multiplication.".red);
      }
      break;

    case "divide":
      if (areValidNumbers(numArgs) && numArgs.length === 2) {
        if (numArgs[1] === 0) {
          console.log("Division by zero is not allowed.".blue);
        } else {
          const quotient = numArgs[0] / numArgs[1];
          console.log(`Result: ${quotient}`.green);
        }
      } else {
        console.log("Provide exactly 2 valid numbers for division.".red);
      }
      break;

    case "sin":
      if (areValidNumbers(numArgs) && numArgs.length === 1) {
        const result = Math.sin(numArgs[0]);
        console.log(`Result: ${result}`.green);
      } else {
        console.log("Provide exactly 1 valid number for sine calculation.".red);
      }
      break;

    case "cos":
      if (areValidNumbers(numArgs) && numArgs.length === 1) {
        const result = Math.cos(numArgs[0]);
        console.log(`Result: ${result}`.green);
      } else {
        console.log(
          "Provide exactly 1 valid number for cosine calculation.".red
        );
      }
      break;

    case "tan":
      if (areValidNumbers(numArgs) && numArgs.length === 1) {
        const result = Math.tan(numArgs[0]);
        console.log(`Result: ${result}`.green);
      } else {
        console.log(
          "Provide exactly 1 valid number for tangent calculation.".red
        );
      }
      break;

    case "random":
      if (numArgs.length === 0) {
        console.log("Provide length for random number generation.".blue);
      } else if (numArgs.length === 1 && areValidNumbers(numArgs)) {
        const length = numArgs[0];
        const randomNumber = crypto.randomBytes(length).toString("binary");
        console.log(`Random Number: ${randomNumber}`.green);
      } else {
        console.log(
          "Provide exactly 1 valid number for the length of the random number."
            .red
        );
      }
      break;

    default:
      console.log("Invalid operation provided.".red);
  }
};

// Perform the calculation based on the provided operation and arguments
calculate(operation, numArgs);
