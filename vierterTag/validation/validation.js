
const passwordInp = document.querySelector("#password");

passwordInp.addEventListener("focus", function () {
    if (passwordInp.validity.valueMissing) {
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity("Das Passwort ist leer.");
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
});