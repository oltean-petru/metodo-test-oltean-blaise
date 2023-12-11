import { App } from './palindrome';
import readline from 'readline';

jest.mock('readline', () => {
  return {
    createInterface: jest.fn().mockReturnValue({
      question: (string: String, callback: Function) => callback('test'),
      close: jest.fn(),
    }),
  };
});

describe('App', () => {
  let app: App;
  let logSpy: jest.SpyInstance;

  beforeEach(() => {
    app = new App();
    logSpy = jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  test('reverseWord', () => {
    expect(app.reverseWord('test')).toBe('tset');
  });

  test('isPalindrome', () => {
    expect(app.isPalindrome('test')).toBe(false);
    expect(app.isPalindrome('tset')).toBe(false);
    expect(app.isPalindrome('racecar')).toBe(true);
  });

  test('greet', () => {
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(10);
    app.greet();
    expect(logSpy).toHaveBeenCalledWith('Bonjour!');
    jest.spyOn(Date.prototype, 'getHours').mockReturnValue(20);
    app.greet();
    expect(logSpy).toHaveBeenCalledWith('Bonsoir!');
  });

  test('askAndReverseWord', () => {
    app.askAndReverseWord();
    expect(logSpy).toHaveBeenCalledWith('tset');
    expect(logSpy).toHaveBeenCalledWith('Bye!');
  });
});