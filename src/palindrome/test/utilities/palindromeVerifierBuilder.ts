import { Palindrome } from './../../palindrome';
import { TimeOfDay } from './../../timeOfDay';
import { LanguageStub } from './languageStub';
import { LanguageInterface } from './../../language.interface';

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
}