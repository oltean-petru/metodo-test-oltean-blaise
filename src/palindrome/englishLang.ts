import { LanguageInterface } from './language.interface';
import { TimeOfDay } from './timeOfDay';
import {Expressions} from "./expressions";

export class EnglishLang implements LanguageInterface {
    public Greet_Bye(): string {
        return Expressions.GOODBYE;
    }

    public Greet(moment: TimeOfDay): string {
        if(moment == TimeOfDay.Morning)
            return Expressions.GOODMORNING;

        if(moment == TimeOfDay.Afternoon)
            return Expressions.GOODAFTERNOON;

        if(moment == TimeOfDay.Evening)
            return Expressions.GOODEVENING;

        if(moment == TimeOfDay.Night)
            return Expressions.GOODNIGHT;

        return Expressions.HELLO;
    }

    public Congratulate(): string {
        return Expressions.WELLDONE;
    }

    public toString(): string {
        return "English Language";
    }
}