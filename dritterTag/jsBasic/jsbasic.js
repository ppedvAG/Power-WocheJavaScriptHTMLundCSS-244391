// Ich bin ein einzeiliger Kommentar

/*
    Mehrzeiliger
    Kommentar
*/

// Können Texte, variablen Zahlen usw direkt in der Konsole der dev-Tools des Browsers eingeben

// Dafür sprechen wir das console Objekt an
console.log("Hallo Welt!"); // einfache Ausgabe
console.error("Da lief was schief!"); // wird als Fehler ausgegeben
console.info("ich bin eine Information!"); // wird im Firefox mit Info Zeichen dargestellt

// Variable definieren:

// Moderne Varianten:
let firstName = "Max";
// identifier muss mit Buchstaben, _ oder $ beginnen
// identifier ist Case Sensitive
let age = 18;
// Variablen die mit let definiert wurden dürfen verändert werden
const lastName = "Mustermann";

// Wie gebe ich diese Variablen in der Konsole aus?
console.log(firstName);

// Mit weiterem String kombinieren:
console.log("Hallo " + firstName + " " + lastName);

// Interpolierter String
console.log(`Hallo ${firstName} ${lastName}`);

// String Zeichenfolge
// String werden "" oder von ''
console.log("Hallo Welt");
console.log('Hallo Welt');

// Wenn wir Anführungszeichen im String benutzen wollen
console.log('Er sagt: "Hi"');
console.log("Er sagt: 'Hi'");

// 3. Variante mit "Escape-Character"
console.log("Er sagt: \"Hallo\"");

// number
// Jeglichen Zahlenwert, egal ob mit oder ohne Komma
let zahl = 12;
let auchZahl = -12.5;

// Arithmetischen Operatoren:
// + Plus
// - Minus
// * Mal
// / Geteilt
// Können mit dem Zuweisungsoperator kombiniert werden
zahl *= 4;
// zahl = zahl * 4;

// % Modulo Teilung mit Rest
console.log(22 % 7);

// Inkrement/Dekrement
//     ++       --
console.log(auchZahl++);
console.log(auchZahl);
console.log(++auchZahl);

// boolean
// true/false
let alleAnwesend = false;
let kursEnde = true;
// wird meistens für Vergleiche und if-Blöcke genutzt

// null
// ist die absichtliche Zuweisung keines Wertes 
let nichts = null;

// undefined
let test;
// Bedeutet, dass die Variable definiert, aber nie initialisiert wurde

// NaN
// Not a Number
// Für ungültige Mathematische Operationen
console.log(test + 50);

// typeof(variable)
console.log(typeof (firstName));

// Scope
// Unterschiede zwischen let, const und var

let x;
var y;
const z = 5;
// 1. Unterschied: const muss sofort mit einem Wert initialisiert werden
// var und let können später initialisiert werden
x = 15;
y = 12;

// 2. Unterschied: var legt uns ein globales Objekt an
{
    let block1 = "hallo";
    var block2 = "bye";
    console.log(block1);
}

console.log(block2);

// 3. hoisting geht nur mit var
w = 15;
console.log(w);
var w;


/*
    Übung:
    
    1. Variablen und Datentypen
        - Erstelle eine Variable vorname und weise ihr deinen Vornamen als String zu
        - ERstelle eine Variable alter und setzte sie auf dein Alter.
        - Erstelle eine Konstante land und setze sie auf den Namen deines Heimatlandes.
        - Verwende die Konsole, um eine Begrüßung auszugeben, die vorname, alter und land 
          kombiniert. Nutze dafür String-Interpolation
    
    2. Operatoren
        - Erstelle eine Variable jahr und setze sie auf das aktuelle Jahr
        - Berechne das Geburtsjahr, indem du alter und jahr abziehst. Speichere in einer Variable geburtsjahr
          und gib es aus.
        - Nutze den Modulo-Operator, um zu überprüfen, ob dein Alter eine gerade oder ungerade Zahl ist
          und gib eine Nachricht aus z.B. "Mein Alter ist eine gerade Zahl"
        

    3. Datentypen und typeof
        - Gib den Datentypen von vorname,alter, land und geburtsjahr mit typeof in der Konsole aus.
        - Erstelle eine neue Variable lieblingszahl, aber weise ihr noch keinen Wert zu. Gib dann den Typ
          der Variable lieblingszahl in der Konsole aus.

    4. Bonus:
        - Erweitere das Script, um interaktive Eingaben von prompt zu akzeptieren und gebe dem Benutzer
        die Möglichkeit, seinen Namen und sein Alter einzugeben.
*/
