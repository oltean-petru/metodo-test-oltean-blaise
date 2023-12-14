import { LanguageInterface } from './../language.interface';
import { Expressions } from './../expressions';
import { LanguageFake } from './utilities/languageFake';
import { EnglishLang } from './../englishLang';
import { FrenchLang } from './../frenchLang';
import { PalindromeVerifierBuilder } from './utilities/palindromeVerifierBuilder';
import { TimeOfDay } from './../timeOfDay';
import * as os from "os";

const palindrome = 'radar';
const nonPalindromes = ['test', 'ynov']
const timeOfDay = [
    TimeOfDay.Unknown,
    TimeOfDay.Morning,
    TimeOfDay.Afternoon,
    TimeOfDay.Evening,
    TimeOfDay.Night
];

describe("test works", () => {
    test.each([...nonPalindromes])(
        "QUAND on saisit un non-palindrome %s " +
        "ALORS elle est renvoyée en miroir",
        (string: string) => {
            let res = PalindromeVerifierBuilder.Default()
                .Verify(string);

            let outcome = string.split('').reverse().join('');
            expect(res).toContain(outcome);
        });

    test.each([
        [new FrenchLang(), Expressions.BIENOUEJ],
        [new EnglishLang(), Expressions.WELLDONE],
    ])("ETANT DONNE un utilisateur parlant la %s " +
        "QUAND on saisit un palindrome " +
        "ALORS celui-ci est renvoyé " +
        "ET '%s' est envoyé ensuite",
        (language: LanguageInterface, output: string) => {
            let verify = new PalindromeVerifierBuilder()
                .HavingLanguage(language)
                .Build();

            let res = verify.Verify(palindrome);

            expect(res).toContain(palindrome + os.EOL + output);
        });

    function salutationCases(){
        let strings = [...nonPalindromes, palindrome];
        let cases: [TimeOfDay, string][]  = [];

        for (let tod of timeOfDay)
            for(let string of strings)
                cases.push([tod, string])
        return cases;
    }

    test.each(salutationCases())(
        'ETANT DONNE un utilisateur parlant une langue ' +
        'ET que nous sommes le %s ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS les salutations de cette langue à ce moment de la journée sont envoyées avant toute réponse',
        (timeOfDay: TimeOfDay, string: string) => {
            let languageFake = new LanguageFake();

            let verifier =
                new PalindromeVerifierBuilder()
                    .HavingLanguage(languageFake)
                    .HavingTimeOfDay(timeOfDay)
                    .Build();

            let res = verifier.Verify(string);


            let firstLine = res.split(os.EOL)[0];
            let output = languageFake.Greet(timeOfDay);
            expect(firstLine).toEqual(output)
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant français ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Au revoir" est envoyé en dernier.',
        (string: string) => {
            const langue = new FrenchLang();
            let verifier =
                new PalindromeVerifierBuilder()
                    .HavingLanguage(langue)
                    .Build();

            let res = verifier.Verify(string);

            let lines = res.split(os.EOL);
            let lastLine = lines[lines.length - 1];
            expect(lastLine).toEqual(Expressions.AU)
        });

    test.each([...nonPalindromes, palindrome])(
        'ETANT DONNE un utilisateur parlant anglais ' +
        'QUAND on saisit une chaîne %s ' +
        'ALORS "Goodbye" est envoyé en dernier.',
        (string: string) => {
            const langue = new EnglishLang();
            let verify =
                new PalindromeVerifierBuilder()
                    .HavingLanguage(langue)
                    .Build();

            let res = verify.Verify(string);

            let lines = res.split(os.EOL);
            let lastLine = lines[lines.length - 1];
            expect(lastLine).toEqual(Expressions.GOODBYE)
        });
});