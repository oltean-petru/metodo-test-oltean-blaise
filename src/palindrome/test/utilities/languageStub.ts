import { TimeOfDay } from './../../timeOfDay';
import { LanguageInterface } from './../../language.interface';
;

export class LanguageStub implements LanguageInterface {
    Congratulate(): string {
        return "";
    }

    Greet(moment: TimeOfDay): string {
        return "";
    }

    Greet_Bye(): string {
        return "";
    }

}