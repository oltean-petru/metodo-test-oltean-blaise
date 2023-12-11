import { App } from './palindrome';

describe('App', () => {
  let app: App;

  beforeEach(() => {
    app = new App();
  });

  test('reverseWord should reverse a word', () => {
    expect(app.reverseWord('hello')).toBe('olleh');
  });

  test('isPalindrome should return true for a palindrome', () => {
    expect(app.isPalindrome('racecar')).toBe(true);
  });

  test('isPalindrome should return false for a non-palindrome', () => {
    expect(app.isPalindrome('hello')).toBe(false);
  });

test('askAndReverseWord should reverse a word and if it is a palindrome, add Bien Ouej! at the end', () => {
  const mockQuestion = jest.fn();
  app.rl.question = mockQuestion;
  mockQuestion.mockImplementation((_question, callback) => callback('racecar'));

  const consoleSpy = jest.spyOn(console, 'log');
  app.askAndReverseWord();

  expect(consoleSpy).toHaveBeenCalledWith('racecar Bien Ouej!');
  expect(consoleSpy).toHaveBeenCalledWith('Bye!');
});

test('askAndReverseWord should reverse a non-palindrome word', () => {
  const mockQuestion = jest.fn();
  app.rl.question = mockQuestion;
  mockQuestion.mockImplementation((_question, callback) => callback('hello'));

  const consoleSpy = jest.spyOn(console, 'log');
  app.askAndReverseWord();

  expect(consoleSpy).toHaveBeenCalledWith('olleh');
  expect(consoleSpy).toHaveBeenCalledWith('Bye!');
});
});