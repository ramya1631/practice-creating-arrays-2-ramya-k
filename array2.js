//Creating an array
// Task 1: Initialize the Array
let greetings = Array(7).fill("Hello"); // Create array and fill with "Hello"
console.log("Task 1:", greetings); // Log the array

// Task 2: Update the Array
greetings.fill("Hi", 2, 5); // Change elements at index 2 to 4 to "Hi"
console.log("Task 2:", greetings); // Log updated array

// Task 3: Populate the Array with a for Loop
let numbers = Array(5); // Create an array with 5 slots
for (let i = 0; i < numbers.length; i++) {
    numbers[i] = i * 10; // Assign index * 10 to each slot
}
console.log("Task 3:", numbers); // Log the final array