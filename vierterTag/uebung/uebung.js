// Uebung:
// Ein Formular mit:
// Benutzername (Pflichtfeld, min: 5 Zeichen lang und keine Sonderzeichen erlaubt)
// Telefonnummer (Pflichtfeld, muss im Format +49 123 4567890 sein)
// Submit Button
// /^[a-zA-Z0-9]+$/ -> Benutzername
// /^\+\d{1,3} \d{3} \d{6,7}$/ -> Telefonnummer

const username = document.querySelector("#username");
const phone = document.querySelector("#phone");
const form = document.querySelector("#userForm");

const constraints = {
    username: {
        pattern: /^[a-zA-Z0-9]+$/,
        minLength: 5,
        errorMessage: "Benutzername muss mind 5 Zeichen lang sein und darf keine Sonderzeichen enthalten"
    },
    phone: {
        pattern: /^\+\d{1,3} \d{3} \d{6,7}$/,
        errorMessage: "Die Telefonnummer muss das Format +49 123 4567890 haben."
    }
};

function validateField(field, constraint) {
    const value = field.value.trim(); // Entfern überflüssige Leerzeichen

    // Prüft, ob die Mindestlänge erreicht ist (nur für Benutzernamen)
    if (value.length === 0) {
        field.setCustomValidity("");
    }
    else if (constraint.minLength && value.length < constraint.minLength) {
        field.setCustomValidity(`Mindestens ${constraint.minLength} Zeichen erforderlich.`);
    }
    // Prüft ob das Eingabeformat mit dem regulären Ausdruck übereinstimmt
    else if (!constraint.pattern.test(value)) {
        field.setCustomValidity(constraint.errorMessage);
    }
    // Falls alles gültig ist, wird die Fehlermeldung entfernt
    else {
        field.setCustomValidity("");
    }

    // Fehlermeldung anzeigen
    field.reportValidity();
}

// Event-Listener für Benutzername
username.addEventListener("input", function () {
    validateField(username, constraints.username);
});

// Event-Listener für Telefonnummer
phone.addEventListener("input", function () {
    validateField(phone, constraints.phone);
});

// Formular absenden verhindern, falls ungültige Eingaben vorliegen
form.addEventListener("submit", function (event) {
    if (!username.checkValidity() || !phone.checkValidity()) {
        event.preventDefault(); // Verhindert das Absenden des Formulars
    }
});