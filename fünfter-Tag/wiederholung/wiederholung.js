/*
Übung: Bestellformular für ein Café
Beschreibung: Dein Ziel ist es, ein Bestellformular für ein Café zu erstellen,
das Kunden erlaubt, ihre Bestellungen online aufzugeben. Du wirst HTML, CSS und JavaScript nutzen, 
um Felder zu validieren und Feedback zu geben, wenn bestimmte Eingaben nicht korrekt sind.

Struktur des Formulars: Das Formular enthält folgende Eingabefelder:

Name des Kunden (Pflichtfeld)
Tischnummer (nur Zahlen, optional)
Getränkeauswahl (mit Dropdown-Liste)
Sonderwünsche (Textfeld, max. 200 Zeichen)
Bestellmenge (Zahl, nur Werte von 1 bis 10)
Bestätigungsfeld (Checkbox: „Ich bestätige meine Bestellung“)


1. HTML-Struktur
Erstelle die HTML-Struktur für das Formular, setze grundlegende Validierungen 
(wie required, maxlength, min, und max), und nutze für das Layout <label>, <input>, <select>, 
und <textarea>-Elemente.

2. CSS-Styling
Erstelle das Styling für das Formular und füge Klassen für Fehler-Feedback hinzu:
Hebe Felder, die nicht korrekt ausgefüllt sind, farblich hervor.
Gestalte das Formular benutzerfreundlich und visuell ansprechend.

3. JavaScript-Validierung
Verwende JavaScript, um die Validität der Felder zu prüfen und dynamische Fehlermeldungen 
anzuzeigen. Hier einige spezifische Validierungsbedingungen:

Wenn der Name nicht eingegeben wurde, soll eine Fehlermeldung „Bitte deinen Namen eingeben!“ angezeigt werden.
Wenn die Bestellmenge nicht im Bereich von 1 bis 10 liegt, soll eine Nachricht wie „Bestellmenge 
muss zwischen 1 und 10 liegen!“ angezeigt werden.
Wenn die Checkbox „Ich bestätige meine Bestellung“ nicht aktiviert ist, zeige eine Meldung 
an, dass die Bestellung nur abgeschickt werden kann, wenn sie bestätigt wurde.

name.addEventListener("blur", validateName);

*/

const gastName = document.querySelector("#gastName");
const bestellMenge = document.querySelector("#anzahl");
const form = document.querySelector("#formAuswahl");

const bedingung = {
    gastName: {
        pattern: /^[a-zA-Z0-9 ]+$/, // Leerzeichen erlaubt
        fehlerMeldung: "Bitte tragen Sie Ihren Namen ohne Sonderzeichen ein und mindestens 5 Zeichen.",
        minLength: 5
    },
    bestellMenge: {
        pattern: /^[0-9]+$/, // Nur Zahlen erlaubt
        anzahlMin: 1,
        anzahlMax: 10,
        fehlerMeldung: "Bitte zwischen 1 und 10 Stück angeben!"
    }
};

function validateField(field, constraint) {
    const value = field.value.trim(); // Entfernt unnötige Leerzeichen

    if (value.length < constraint.minLength) {
        field.setCustomValidity(constraint.fehlerMeldung);
    } else if (!constraint.pattern.test(value)) {
        field.setCustomValidity(constraint.fehlerMeldung);
    } else if (constraint.anzahlMin !== undefined && constraint.anzahlMax !== undefined) {
        let numValue = parseInt(value, 10);
        if (isNaN(numValue) || numValue < constraint.anzahlMin || numValue > constraint.anzahlMax) {
            field.setCustomValidity(constraint.fehlerMeldung);
        } else {
            field.setCustomValidity("");
        }
    } else {
        field.setCustomValidity("");
    }
    field.reportValidity();
}

// Event-Listener für Gastname
gastName.addEventListener("input", function () {
    validateField(gastName, bedingung.gastName);
});

// Event-Listener für Anzahl
bestellMenge.addEventListener("blur", function () {
    validateField(bestellMenge, bedingung.bestellMenge);
});

// Formular absenden verhindern, falls ungültige Eingaben vorliegen
form.addEventListener("submit", function (event) {
    if (!gastName.checkValidity() || !bestellMenge.checkValidity()) {
        event.preventDefault(); // Verhindert das Absenden des Formulars
    }
});

const agbCheckbox = document.querySelector("#agb");
const submitButton = document.querySelector("#submitButton");

submitButton.disabled = true;

agbCheckbox.addEventListener("change", function () {
    submitButton.disabled = !agbCheckbox.checked;
});