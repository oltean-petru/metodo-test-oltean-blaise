import { Palindrome } from './../../palindrome';
import { TimeOfDay } from './../../timeOfDay';
import { LanguageStub } from './languageStub';
import { LanguageInterface } from './../../language.interface';
import * as os from "os";

export class PalindromeVerifierBuilder {
    private _language: LanguageInterface = new LanguageStub();
    private _moment: TimeOfDay = TimeOfDay.Unknown;

    public static Default() {
        return new PalindromeVerifierBuilder().Build();
    }

    public Build(): Palindrome {
        return new Palindrome(this._language, this._moment);
    }

    public HavingLanguage(language: LanguageInterface): PalindromeVerifierBuilder {
        this._language = language;
        return this;
    }

    public HavingTimeOfDay(moment: TimeOfDay) {
        this._moment = moment;
        return this;
    }

    public Verify(string: string): string {
        let mirror = string.split('').reverse().join('');

        let sortie = this._language.Greet(this._moment) + os.EOL + mirror + os.EOL;

        if (mirror == string)
            sortie += this._language.Congratulate() + os.EOL;

        return sortie + this._language.Greet_Bye();
    }
}