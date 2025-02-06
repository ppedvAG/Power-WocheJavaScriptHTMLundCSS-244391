
const passwordInp = document.querySelector("#password");

passwordInp.addEventListener("focus", function () {
    if (passwordInp.validity.valueMissing) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity("Das Passwort ist leer!");
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
});

/** Validity Props:
 * patternMismatch - Inhalt stimmt nicht mit pattern überein
 * tooLong - Inhalt ist zu lang
 * tooShort - Inhalt ist zu kurz
 * rangeOverflow - Wert höher als im max-Attribut
 * rangeUnderflow - Wert niedriger als im min-Attribut
 * typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
 * valid - Gibt true zurück wenn alles gültig ist
 * valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist
 */

// Uebung:
// Erstellt ein eigenes Validty Prop (Passwort darf nicht kürzer als 8 Zeichen sein)
passwordInp.addEventListener("keyup", function () {
    if (passwordInp.validity.tooShort) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity(`Das Passwort ist zu kurz! Aktuell: ${passwordInp.value.length}Zeichen`);
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
});


const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country");

function checkPlz() {
    // Ein Objekt, das die Postleitzahl Bedingungen für verschiedene Länder speichert
    let constraints = {
        // zb: Schweiz PLZ muss entweder CH- gefolgt von 4 Zahlen oder nur 4 Zahlen enthalten
        ch: ['^(CH-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g. CH-1950 oder 1950"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g. F-19502 oder 19502"],
        de: ['^(D-)?\\d{5}$', "Deutsche PLZ müssen aus genau 5 Zeichen bestehen: e.g. D-19501 oder 19501"]
    }

    // Die aktuell ausgewählte Länderoption (z.B. "ch", "fr" oder "de")
    const countryValue = country.value;
    // Der eingegebene Postleitzahlenwert aus dem Eingabefeld
    const zipCodeValue = zipCode.value;

    // Erstellen eines regulären Ausdrucks (Regexp) basierend auf dem ausgewählten Land
    let constraint = new RegExp(constraints[countryValue][0], "");

    // Überprüfung, ob die eingegebene Postleitzahl dem Muster des Landes entspricht
    if (constraint.test(zipCodeValue)) {
        // Falls die PLZ korrekt ist, wird keine Fehlermeldung gesetzt
        zipCode.setCustomValidity("");
    }
    else {
        // Falls die PLZ nicht passt, wird eine spezifische Fehlermeldung gesetzt
        zipCode.setCustomValidity(constraints[countryValue][1]);
        // Zeigt die Fehlermeldung direkt an
        zipCode.reportValidity();
    }
}
// Event-Listener für Änderungen im PLZ-Feld
zipCode.addEventListener("input", checkPlz);
// Event-Listener für Änderungen im Länder-Auswahlfeld
country.addEventListener("input", checkPlz);


