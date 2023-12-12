import { LanguageInterface } from './language.interface';
import { TimeOfDay } from './timeOfDay';
import {Expressions} from "./expressions";

export class EnglishLang implements LanguageInterface {
    public Greet_Bye(): string {
        return Expressions.GOODBYE;
    }

    public Greet(moment: TimeOfDay): string {
        return Expressions.HELLO;
    }

    public Congratulate(): string {
        return Expressions.WELLDONE;
    }

    public toString(): string {
        return "English Language";
    }
}