function gestioneListaDellaSpesa() {
    const listaSpesa = {};

    let loop = true;

    while (loop) {
        let azione = prompt("Vuoi AGGIUNGERE (1), RIMUOVERE (2) o VISUALIZZARE (3) gli elementi della lista della spesa?");

        switch (azione) {
            case "1":
                let prodottoDaAggiungere = prompt("Quale prodotto vuoi aggiungere?");
                let quantitaDaAggiungere = parseInt(prompt("Quanta quantita' vuoi aggiungere?"), 10);

                if (prodottoDaAggiungere && !isNaN(quantitaDaAggiungere) && quantitaDaAggiungere > 0) {
                    if (listaSpesa[prodottoDaAggiungere]) {
                        listaSpesa[prodottoDaAggiungere] += quantitaDaAggiungere;
                    } else {
                        listaSpesa[prodottoDaAggiungere] = quantitaDaAggiungere;
                    }
                    alert(`${quantitaDaAggiungere} ${prodottoDaAggiungere} aggiunti alla lista.`);
                } else {
                    alert("Inserimento non valido. Assicurati di fornire un prodotto e una quantita' valida.");
                }
                break;

            case "2":
                let prodottoDaRimuovere = prompt("Quale prodotto vuoi rimuovere?");
                let quantitaDaRimuovere = parseInt(prompt("Quanta quantita' vuoi rimuovere?"), 10);

                if (prodottoDaRimuovere && !isNaN(quantitaDaRimuovere) && quantitaDaRimuovere > 0) {
                    if (listaSpesa[prodottoDaRimuovere]) {
                        if (listaSpesa[prodottoDaRimuovere] >= quantitaDaRimuovere) {
                            listaSpesa[prodottoDaRimuovere] -= quantitaDaRimuovere;
                            alert(`${quantitaDaRimuovere} ${prodottoDaRimuovere} rimossi dalla lista.`);
                            
                            // Rimuove il prodotto se la quantità scende a 0
                            if (listaSpesa[prodottoDaRimuovere] === 0) {
                                delete listaSpesa[prodottoDaRimuovere];
                            }
                        } else {
                            alert("Non hai abbastanza quantita' per rimuovere.");
                        }
                    } else {
                        alert("Il prodotto non e' presente nella lista.");
                    }
                } else {
                    alert("Inserimento non valido. Assicurati di fornire un prodotto e una quantita' valida.");
                }
                break;

            case "3":
                if (Object.keys(listaSpesa).length > 0) {
                    let listaVisualizzazione = "Lista della spesa:\n";
                    for (let prodotto in listaSpesa) {
                        listaVisualizzazione += `${prodotto}: ${listaSpesa[prodotto]}\n`;
                    }
                    alert(listaVisualizzazione);
                } else {
                    alert("La lista della spesa e' vuota.");
                }
                break;

            default:
                alert("Azione non valida. Per favore, scegli '1' per AGGIUNGERE, '2' per RIMUOVERE o '3' per VISUALIZZARE.");
        }

        let continua = prompt("Vuoi fare un'altra operazione? (SI/NO)");
        if (continua && continua.toUpperCase() === "NO") {
            loop = false;
        }
    }

    console.log("Ecco la tua lista finale:", listaSpesa);
}
