function loopMessaggio() {
    while (true) {
        let input = prompt("Inserisci un valore (digita 'ESCI' per uscire):");

        if (input === "ESCI") {
            console.log("Uscita dal ciclo.");
            break; 
        } else {
            console.log("Hai inserito: " + input);
        }
    }
}
