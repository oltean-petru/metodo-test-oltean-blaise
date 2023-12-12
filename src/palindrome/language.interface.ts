import { TimeOfDay } from './timeOfDay';
export interface LanguageInterface {
    Congratulate(): string;
    Greet(moment: TimeOfDay): string;
    Greet_Bye(): string;
}