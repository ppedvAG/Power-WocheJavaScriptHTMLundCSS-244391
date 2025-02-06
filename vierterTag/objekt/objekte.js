// einfaches Objekt
const person = {
    name: "Max",
    alter: 25,
    beruf: "Entwickler"
};

// Objekte auf der Konsole ausgeben
console.log(person.name);
console.log(person["alter"]);

// Properties ändern und hinzufügen
person.alter = 26; // Ändern einer Eigenschaft
person.stadt = "Berlin"; // Neue Eigenschaft hinzufügen
console.log(person.alter);
console.log(person);

// Methoden (Funktionen in Objekten)
const auto = {
    marke: "BMW",
    start: function () {
        console.log("Das Auto startet...");
    }
};
auto.start();

// this zeiger
const hund = {
    name: "Bello",
    bellen: function () {
        console.log(this.name + " sagt Wuff!");
    }
};

hund.bellen();

// Konstruktor-Funktion
// Wenn du viele ähnliche Objekte brauchst, nutze eine Funktion als Vorlage:
function Person(vorname, alter) {
    this.vorname = vorname;
    this.alter = alter;
    this.vorstellen = function () {
        console.log("Hallo, ich heiße " + this.vorname + " und bin " + this.alter + " Jahre alt!");
    };
}

const person1 = new Person("Anna", 30);
const person2 = new Person("Lukas", 25);

person1.vorstellen();
person2.vorstellen();


// Objekte mit Klassen (Moderne Schreibweise)
class Auto {
    constructor(marke, farbe) {
        this.marke = marke;
        this.farbe = farbe;
    }

    beschreiben() {
        console.log(`Das Auto ist ein ${this.farbe}er ${this.marke}.`);
    }
}
const eingabe = "Mercedes1"
const meinAuto = new Auto(eingabe, "schwarz");
meinAuto.beschreiben();

meinAuto.farbe = "blau";
meinAuto.beschreiben();

const deinAuto = new Auto("BMW", "lilan");
deinAuto.beschreiben();

console.log(meinAuto);

const varw = 23;

console.log(typeof (meinAuto));