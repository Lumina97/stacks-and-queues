// BE SURE TO IMPORT YOUR STACK CLASS

import { Stack } from "./2-stack";

// ==============================
// 1️⃣ Reverse a String Using a Stack
// ==============================
// Write a function that takes a string as input and returns the reversed string using a stack.
// You may only use stack operations (`push`, `pop`, `isEmpty`).

const reverseString = (s: string) => {
  const stack = new Stack<string>();
  for (const char of s) {
    stack.push(char);
  }
  //should use array instead of a string and join at the end
  //but not sure if I can use array
  s = "";
  while (stack.isEmpty() === false) {
    s += stack.pop();
  }
  console.log(s);
  return s;
};

// Example Test Cases:
// reverseString("hello"); // "olleh"
// reverseString("world"); // "dlrow"
// reverseString(""); // ""
// reverseString("abcd"); // "dcba"

// ==============================
// 2️⃣ Check for Balanced Parentheses
// ==============================
// Given a string containing only the characters `()`, `{}`, and `[]`,
// write a function to determine if the string is valid.
// A string is valid if brackets are closed in the correct order. Use a stack to track open brackets.

const isValidParentheses = (s: string) => {
  const history = new Stack<string>();
  for (const char of s) {
    //if opening add to history
    if (char === "(" || char === "{" || char === "[") history.push(char);
    //if closing and matching remove last entry
    else if (
      (char === ")" && history.peek() === "(") ||
      (char === "}" && history.peek() === "{") ||
      (char === "]" && history.peek() === "[")
    )
      history.pop();
    //otherwise it's closing and not matching
    else return false;
  }
  //check if all pairs are closed and return
  return history.isEmpty();
};
// Example Test Cases:
// isValidParentheses("({[]})") // true
// isValidParentheses("({[)]}") // false
// isValidParentheses("()") // true
// isValidParentheses("{[()]}") // true
// isValidParentheses("(((") // false

// ==============================
// 3️⃣ Evaluate a Postfix Expression
// ==============================
// Write a function that evaluates a mathematical expression in **postfix notation** (Reverse Polish Notation).
// The function should use a stack to process numbers and operators.
// Assume the input is a space-separated string of numbers and `+`, `-`, `*`, or `/` operators.
function evaluatePostfix(input: any) {
  let stack = new Stack<number>();
  let tokens = input.split(" ");

  for (let token of tokens) {
    if (!isNaN(token)) {
      stack.push(Number(token));
    } else {
      let b = stack.pop()!;
      let a = stack.pop()!;

      let result: number = Infinity;
      if (token === "+") {
        result = a + b;
      } else if (token === "-") {
        result = a - b;
      } else if (token === "*") {
        result = a * b;
      } else if (token === "/") {
        result = Math.floor(a / b);
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

// ==============================
// 🚀 Example Test Cases
// ==============================
// console.log(evaluatePostfix("3 4 +")); // 7
// console.log(evaluatePostfix("5 1 2 + 4 * + 3 -")); // 14
// console.log(evaluatePostfix("10 2 8 * + 3 -")); // 23
// console.log(evaluatePostfix("6 2 /")); // 3
// console.log(evaluatePostfix("4 5 * 2 /")); // 10

// Example Test Cases:
// evaluatePostfix("3 4 +") // 7
// evaluatePostfix("5 1 2 + 4 * + 3 -") // 14
// evaluatePostfix("10 2 8 * + 3 -") // 23
// evaluatePostfix("6 2 /") // 3
// evaluatePostfix("4 5 * 2 /") // 10

// ==============================
// 4️⃣ Next Greater Element
// ==============================
// Given an array of integers, find the **next greater element** for each element.
// The next greater element of an element **x** is the first element to the right that is greater than **x**.
// If none exists, return `-1` for that element. Use a stack for efficiency.
function nextGreaterElement(arr: number[]) {
  let stack = new Stack<number>();
  let result = new Array(arr.length).fill(-1);

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.size() > 0 && stack.peek() <= arr[i]) stack.pop();

    if (stack.size() > 0) result[i] = stack.peek();

    stack.push(arr[i]);
  }

  return result;
}

// ==============================
// 🚀 Example Test Cases
// ==============================
// console.log(nextGreaterElement([4, 5, 2, 10, 8])); // [5, 10, 10, -1, -1]
// console.log(nextGreaterElement([3, 2, 1])); // [-1, -1, -1]
// console.log(nextGreaterElement([1, 3, 2, 4])); // [3, 4, 4, -1]

// ==============================
// 5️⃣ Daily Temperatures
// ==============================
// Given an array `temperatures` where `temperatures[i]` is the temperature on day `i`,
// return an array **answer** where `answer[i]` is the number of days you have to wait after the `i-th` day
// to get a warmer temperature. If there is no future day with a warmer temperature, return `0`.

function dailyTemperatures(temperatures: number[]) {
  let stack = new Stack<number>();
  let answer = new Array(temperatures.length).fill(0);

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.size() > 0 && temperatures[i] > temperatures[stack.peek()]) {
      let prevIndex = stack.pop()!;
      answer[prevIndex] = i - prevIndex;
    }
    stack.push(i);
  }

  return answer;
}

// ==============================
// 🚀 Example Test Cases
// ==============================
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]
console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 20, 10])); // [0, 0, 0]
