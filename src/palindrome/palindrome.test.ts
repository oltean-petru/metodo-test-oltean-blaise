import { App } from './palindrome';

function testReverseWord() {
  const app = new App();
  const result = app.reverseWord('hello');
  if (result !== 'olleh') {
    throw new Error(`Expected 'olleh', but got '${result}'`);
  }
}

function testIsPalindrome() {
  const app = new App();
  if (!app.isPalindrome('radar')) {
    throw new Error(`Expected 'radar' to be a palindrome`);
  }
  if (app.isPalindrome('hello')) {
    throw new Error(`Expected 'hello' not to be a palindrome`);
  }
}

testReverseWord();
testIsPalindrome();