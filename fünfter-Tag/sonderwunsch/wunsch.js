// Log-Bereich für Meldungen
const logElement = document.getElementById("log");

// Funktion zum Protokollieren von Nachrichten
function logMessage(message) {
    const p = document.createElement("p");
    p.textContent = message;
    logElement.appendChild(p);
}

// Simulierte asynchrone Funktion mit Verzögerung
function delayedFunction(name, delay) {
    return new Promise(resolve => {
        const startTime = Date.now();
        setTimeout(() => {
            const endTime = Date.now();
            const duration = endTime - startTime;
            logMessage(`${name} abgeschlossen nach ${duration} ms`);
            resolve();
        }, delay);
    });
}

// Hauptfunktion zur schrittweisen Ausführung der Funktionen
async function executeFunctions() {
    logElement.innerHTML = ""; // Log-Bereich leeren
    logMessage("Starte Funktionen...");

    await delayedFunction("Funktion 1", 1000);
    await delayedFunction("Funktion 2", 1200);
    await delayedFunction("Funktion 3", 800);
    await delayedFunction("Funktion 4", 1500);
    await delayedFunction("Funktion 5", 900);
    await delayedFunction("Funktion 6", 1100);
    await delayedFunction("Funktion 7", 1300);
    await delayedFunction("Funktion 8", 700);
    await delayedFunction("Funktion 9", 1600);
    await delayedFunction("Funktion 10", 1000);

    logMessage("Alle Funktionen abgeschlossen!");
}

// Event-Listener für den Start-Button
document.getElementById("startButton").addEventListener("click", executeFunctions);