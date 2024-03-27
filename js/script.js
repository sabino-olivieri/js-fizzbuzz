// creo variabili per il contenuto e la classe sfondo
let content, background;

// creo variabile per elemento row in html
const rowElem = document.querySelector(".row");

// creo ciclo che si ripete 100 volte
for (let i = 1; i <= 100; i++) {

    // se è multiplo di 3 e di 5
    if (i % 3 === 0 && i % 5 === 0) {

        // assegno il contenuto e lo sfondo
        content = "FizzBuzz";
        background = "bg-red"
        console.log("FizzBuzz");

    } else if (i % 3 === 0) {

        // assegno il contenuto e lo sfondo
        content = "Fizz";
        background = "bg-green"
        console.log("Fizz");

    } else if (i % 5 === 0) {

        // assegno il contenuto e lo sfondo
        content = "Buzz";
        background = "bg-yellow";
        console.log("Buzz");

    } else {

        // assegno il contenuto e lo sfondo
        content = i;
        background = "bg-blue";
        console.log(i);

    }

    // creo elemento col da inserire in html
    const colElem = document.createElement("div");
    // assegno la classe col e la classe per lo sfondo
    colElem.classList.add("col", background);
    console.log(colElem);
    // inserisco il contenuto nell'elemento col
    colElem.innerHTML = content;
    // aggiungo colElem all'interno di row 
    rowElem.append(colElem);

}