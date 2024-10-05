function listaDellaSpesa() {
    let listaSpesa = [];
    let loop = true;

    while (loop) {
        let prodotto = prompt("Cosa vuoi aggiungere alla lista della spesa?");
        
        if (prodotto) {
            listaSpesa.push(prodotto);
            console.log("Lista della spesa:", listaSpesa);
            alert("Prodotto aggiunto correttamente alla lista della spesa.");
        }

        let risposta = prompt("Vuoi aggiungere altri prodotti? SI o NO");
        if (risposta && risposta.toUpperCase() === "NO") {
            break;
        }
    }

    console.log("Ecco la tua lista finale:", listaSpesa);
}
