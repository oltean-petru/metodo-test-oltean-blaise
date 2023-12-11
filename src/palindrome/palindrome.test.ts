import { App } from './palindrome';

const app = new App();

function testReverseWord() {
  const result = app.reverseWord('hello');
  if (result !== 'olleh') {
    throw new Error(`Expected 'olleh', but got '${result}'`);
  }
}

function testIsPalindrome() {
  const result = app.isPalindrome('hello');
  if (result) {
    throw new Error(`Expected 'false', but got '${result}'`);
  }
}

testReverseWord();
testIsPalindrome();