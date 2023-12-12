import { LanguageInterface } from './language.interface';
import { TimeOfDay } from './timeOfDay';
import {Expressions} from "./expressions";

export class FrenchLang implements LanguageInterface {
    public Greet_Bye(): string {
        return Expressions.AU;
    }

    public Greet(moment: TimeOfDay): string {
        return Expressions.BONJOUR;
    }

    public Congratulate(): string {
        return Expressions.BIENOUEJ;
    }

    public toString(): string {
        return "French Language";
    }
}