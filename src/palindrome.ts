import readline from 'readline';

class App {
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

  askAndReverseWord() {
    this.rl.question('Mot?: ', (word) => {
      const reversedWord = word.split('').reverse().join('');
      if (word === reversedWord) {
        console.log(`${reversedWord} Bien Ouej!`);
      } else {
        console.log(`${reversedWord}`);
      }
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