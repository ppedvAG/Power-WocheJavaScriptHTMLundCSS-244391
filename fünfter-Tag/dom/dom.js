// 1. Text ändern
document.getElementById('changeTextButton').addEventListener('click', function () {
    const greetingParagraph = document.getElementById('greeting');
    greetingParagraph.innerHTML = "Du hast den Text erfolgreich geändert!";
});

// 2. Neues Element hinzufügen
document.getElementById('addItemButton').addEventListener('click', function () {
    const itemList = document.getElementById('itemList');
    const newItem = document.createElement('li'); // Neues Listenelement erstellen
    newItem.textContent = "Neues Element"; // Text für das neue Listenelement hinzufügen
    itemList.appendChild(newItem); // Das neue Element zur Liste hinzufügen
});

// 3. Element entfernen
document.getElementById('removeElementButton').addEventListener('click', function () {
    const itemList = document.getElementById('itemList');
    if (itemList.children.length > 0) {
        itemList.removeChild(itemList.lastElementChild); // Entfernt das letzte Element der Liste
    } else {
        alert('Es gibt keine Elemente zum Entfernen!');
    }
});

// Beispiel für das Hinzufügen und Entfernen von Klassen
document.getElementById('greeting').addEventListener('click', function () {
    const infoBox = document.getElementById('infoBox');
    infoBox.classList.toggle('hidden'); // Schaltet die Sichtbarkeit der Info-Box ein/aus
});

// Klasse 'highlight' auf das H1-Element umschalten
document.getElementById('toggleHighlitghButton').addEventListener('click', function () {
    const greeting = document.getElementById('greeting');
    greeting.classList.toggle('highlight');
});