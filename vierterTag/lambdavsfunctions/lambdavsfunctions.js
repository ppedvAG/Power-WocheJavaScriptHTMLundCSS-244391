// per Lambda
const person = {
    name: "Alice",
    sayHello: function () {
        setTimeout(() => {
            console.log(`Hi, ich bin ${this.name}`);
        }, 1000);
    },
};

person.sayHello();


// per Funktion

function sayHello(name) {
    setTimeout(function () {
        console.log(`Hi, ich bin ${this.name}`); // undefined
    }, 1000);
};


sayHello("alice");


const person2 = person("Alice", 20, "Bayern");
person2.sayHello();

/*
Callbacks (map, filter, reduce) => Lambda
Methoden in Objekten (this-abhängig) => Normale Funktion
Konstruktor-Funktion mit "new" => Normale Funktion
Kurzschreibweise für einfache Funktionen => Lambda
Event-Handler => Lambda
Funktionen mit arguments-Zugriff => Normale Funktion
*/