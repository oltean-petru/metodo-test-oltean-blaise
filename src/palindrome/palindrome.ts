import readline from 'readline';

export class App {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  greet() {
    const date = new Date();
    const hour = date.getHours();
    if (hour >= 6 && hour <= 18) {
      console.log(`Bonjour!`);
    } else {
      console.log(`Bonsoir!`);
    }
  }

  reverseWord(word: string): string {
    return word.split('').reverse().join('');
  }

  isPalindrome(word: string): boolean {
    return word === this.reverseWord(word);
  }

  askAndReverseWord() {
    this.rl.question('Mot?: ', (word) => {
      const reversedWord = this.reverseWord(word);
      this.isPalindrome(word) ? console.log(`${reversedWord} Bien Ouej!`) : console.log(`${reversedWord}`);
      console.log('Bye!');
      this.rl.close();
    });
  }

  run() {
    this.greet();
    this.askAndReverseWord();
  }
}

const app = new App();
app.run();