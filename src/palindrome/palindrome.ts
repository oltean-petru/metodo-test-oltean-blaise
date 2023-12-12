import { EnglishLang } from './englishLang';
import { FrenchLang } from './frenchLang';
import { TimeOfDay } from './timeOfDay';
import { LanguageInterface } from './language.interface';
import readline from 'readline';
import * as os from 'os';

export class Palindrome {
  public rl: readline.Interface;
  private readonly _language: LanguageInterface;
  private readonly _moment: TimeOfDay;

  constructor(
    language: LanguageInterface,
    moment: TimeOfDay
  ) {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this._language = language;
    this._moment = moment;
  }
  public Verify(input: string): string {
    let reversed = input.split('').reverse().join('');

    let output = this._language.Greet(TimeOfDay.Morning) + os.EOL + reversed + os.EOL;

    if (reversed == input)
    output += this._language.Congratulate() + os.EOL;

    return output + this._language.Greet_Bye();
  }
}

// const app = new Palindrome(new FrenchLang());
// console.log(app.Verify("radar"));