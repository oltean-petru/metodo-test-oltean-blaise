import { TimeOfDay } from './../../timeOfDay';
import { LanguageInterface } from './../../language.interface';


export class LanguageFake implements LanguageInterface {
    Congratulate(): string {
        return "Congratulate";
    }

    Greet(moment: TimeOfDay): string {
        return "Hello/" + moment.toString();
    }

    Greet_Bye(): string {
        return "Goodbye";
    }
}