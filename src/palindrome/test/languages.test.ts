import { LanguageInterface } from './../language.interface';
import { Expressions } from './../expressions';
import { TimeOfDay } from './../timeOfDay';
import { EnglishLang } from './../englishLang';
import { FrenchLang } from './../frenchLang';

describe("Languages", () => {
    test.each([
        [new FrenchLang(), TimeOfDay.Morning, Expressions.BONMATIN],
        [new FrenchLang(), TimeOfDay.Afternoon, Expressions.BONAPRESMIDI],
        [new FrenchLang(), TimeOfDay.Evening, Expressions.BONNESOIREE],
        [new FrenchLang(), TimeOfDay.Night, Expressions.BONNENUIT],
        [new FrenchLang(), TimeOfDay.Unknown, Expressions.BONMATIN],
        [new EnglishLang(), TimeOfDay.Morning, Expressions.GOODMORNING],
        [new EnglishLang(), TimeOfDay.Afternoon, Expressions.GOODAFTERNOON],
        [new EnglishLang(), TimeOfDay.Evening, Expressions.GOODEVENING],
        [new EnglishLang(), TimeOfDay.Night, Expressions.GOODNIGHT],
        [new EnglishLang(), TimeOfDay.Unknown, Expressions.GOODMORNING]
    ])("En %s on salue le %s par '%s'",
        (language: LanguageInterface, moment: TimeOfDay, output: string) => {
        expect(language.Greet(moment)).toBe(output)
    })
});