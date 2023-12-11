import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const date = new Date();
const hour = date.getHours();
if (hour >= 6 && hour <= 18) {
  console.log(`Bonjour!`);
} else {
  console.log(`Bonsoir!`);
}

rl.question('Mot?: ', (word) => {
  const reversedWord = word.split('').reverse().join('');
  if (word === reversedWord) {
    console.log(`${reversedWord} Bien Ouej!`);
  } else {
    console.log(`${reversedWord}`);
  }
  console.log('Bye!');
  rl.close();
});